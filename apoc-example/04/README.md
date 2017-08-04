# apoc-example

note: need to to improve on this approach.  ran ~16 hours (afternoon and overnight), did not complete loading or indexing.

note2: made a small subset with data from only two users.  running the load json script with that failed with a [nodejs string memory overflow error](https://github.com/nodejs/node/issues/3175).

```
Error: "toString()" failed
    at stringSlice (buffer.js:552:42)
    at Buffer.toString (buffer.js:629:10)
    at Request.<anonymous> (/Users/m/workspace/neo4j-json-demo/node_modules/request/request.js:1145:39)
    at emitOne (events.js:115:13)
    at Request.emit (events.js:210:7)
    at IncomingMessage.<anonymous> (/Users/m/workspace/neo4j-json-demo/node_modules/request/request.js:1091:12)
    at Object.onceWrapper (events.js:314:30)
    at emitNone (events.js:110:20)
    at IncomingMessage.emit (events.js:207:7)
    at endReadableNT (_stream_readable.js:1045:12)
```

note3: next is to try csv import instead.

this example loads a [1.2mb citation graph json dataset](readme-blocks-graph.json) from the d3 example [readme-vis](https://github.com/micahstubbs/readme-vis) project

this is interesting because:
  - the source data file is larger that previous examples
  - it demonstrates that the json import into neo4j concept can generalize from the small examples we've seen so far to my actual use case 😅

in this iteration we continue to use the [load-json-file.js](load-json-file.js) script together with the [APOC neo4j procedure library](https://neo4j.com/blog/intro-user-defined-procedures-apoc/) to load a json graph object from a local file on disk