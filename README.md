# Purpose

- Study a working example of CRDT
- Create a reproducible environment for yjs.
- Deconstruct yjs
  - Understand how it stores the data
  - Reproduce my own function CRDT
- Evaluate if yjs can be used in production

# Current Evaluation

yjs can't be used in production because:

- Doesn't work with create-react-app
  - This is important for me because it makes it easier for me to manage the front end
- No TypeScript definitions

# Concerns

- Is Yjs still being actively developed on? Yes
  - https://github.com/y-js/yjs/commits/master
  - They are working on v13
  - gitter community has chatter
    - https://gitter.im/y-js/yjs

# Difficulties

- Yjs uses a dynamic require. Read `packages/frontend/README.md` to disable it
- No official LevelDB docker image
  - https://github.com/google/leveldb/issues/513
  - https://hub.docker.com/r/ekristen/leveldb/
    - 4 years old
  - https://computingforgeeks.com/how-to-install-leveldb-on-ubuntu-18-04-ubuntu-16-04/
    - https://github.com/google/leveldb/releases

# Links

- http://y-js.org/
  - https://github.com/y-js/yjs
    - Latest is 13.0.0-94
  - https://github.com/y-js/yjs/tree/v12.3.3
  - https://github.com/y-js/y-websockets-client
  - https://github.com/y-js/y-websockets-server
    - Last commit Apr 7 2018
    - "yjs": "^13.0.0-51"
  - https://github.com/y-js/y-memory
    - Last commit Jul 1 2017
    - "yjs": ">= 9.0.0 < 14.0.0"
- https://github.com/google/leveldb