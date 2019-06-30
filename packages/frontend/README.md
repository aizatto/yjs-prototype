# Notes

## Setup

```sh
yarn add yjs y-websockets-client y-map y-array
```

## Errors

Tutorial is for older version of yjs 12.3.3.

Trying to use latest (13.0.0-94) result in there being no `Y.utils`


### Using yjs@12.3.3

Problem trying to get tutorial working, run into this error

```
Critical dependency: the request of a dependency is an expression
```

Opening `node_modules/yjs/src/y.js` and disable line `74`

- https://github.com/y-js/yjs/blob/v12.3.3/y.es6#L4401

# Links

- http://y-js.org/#!/tutorial