import React, { useEffect } from 'react';
 // @ts-ignore
import * as Y from 'yjs';
 // @ts-ignore
import * as YMemory from 'y-memory';
 // @ts-ignore
import * as YWebsocketsClient from 'y-websockets-client';
 // @ts-ignore
import * as YArray from 'y-array';
 // @ts-ignore
import * as YMap from 'y-map';
 // @ts-ignore
import * as YText from 'y-text';

YMemory(Y);
YWebsocketsClient(Y);
YArray(Y);
YMap(Y);
YText(Y);

let yInstance: any = null;

const initY = async () => {
  if (yInstance) {
    return yInstance;
  }

  yInstance = await Y({
    db: {
      name: 'memory' // store the shared data in memory
    },
    connector: {
      name: 'websockets-client', // use the websockets connector
      room: 'my room',            // Instances connected to the same room share data
      url: 'localhost:1234' // specify your own server destination
    },
    share: { // specify the shared content
      map: 'Map',    // y.share.map is of type Y.Map
      array: 'Array', // y.share.array is of type Y.Array
      textarea: 'Text', // y.share.textarea is of type y-text
    },
  });

  /* 
    At this point Yjs is successfully initialized.
    Try it out in your browser console!
  */
  // window.y = yInstance;
  // yInstance.share.map // is an Y.Map instance;
  // yInstance.share.array // is an Y.Array instance
  return yInstance;
}

const App: React.FC = () => {
  useEffect(() => {
    Promise.all([(async () => {
      const y = await initY();
      y.share.textarea.bind(document.getElementById('textfield'))
    })()]);
  });
  return (
    <div className="App">
      Hi
      <textarea id="textfield"></textarea>
    </div>
  );
}

export default App;
