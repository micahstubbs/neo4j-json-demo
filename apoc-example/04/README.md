# apoc-example

this example loads a [1.2mb citation graph json dataset](readme-blocks-graph.json) from the d3 example [readme-vis](https://github.com/micahstubbs/readme-vis) project

this is interesting because:
  - the source data file is larger that previous examples
  - it demonstrates that the json import into neo4j concept can generalize from the small examples we've seen so far to my actual use case 😅

in this iteration we continue to use the [load-json-file.js](load-json-file.js) script together with the [APOC neo4j procedure library](https://neo4j.com/blog/intro-user-defined-procedures-apoc/) to load a json graph object from a local file on disk