# apoc-example

this example combines the [load-json-file.js](load-json-file.js) script with the cypher query from this [stackoverflow answer] to load a small movies graph into neo4j.

this example is interesting because it reformats the json graph data to look more like the d3 community conventions for representation graphs in json.  differences include: 
  - _relationships_ --> `links`
  - _startNode_ --> `source`
  - _endNode_ --> `target` 

this iteration uses the [APOC neo4j procedure library](https://neo4j.com/blog/intro-user-defined-procedures-apoc/) to load a json graph object that has `nodes` and `links` properties.

this iteration loads the graph data from a local file on disk, `small-movie-graph.json`