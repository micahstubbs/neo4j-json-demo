# apoc-example

this example combines the [load-json-file.js](load-json-file.js) script with the cypher query from this [stackoverflow answer] to load a small movies graph into neo4j.

this example is interesting because it uses the [APOC neo4j procedure library](https://neo4j.com/blog/intro-user-defined-procedures-apoc/) to load a json graph object that has `nodes` and `relationships` (akak edges or links) properties

this iteration load the graph data from a local file on disk, `small-movie-graph.json`