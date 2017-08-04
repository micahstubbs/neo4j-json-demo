# apoc-example

this example starts with a [1.2mb citation graph json dataset](readme-blocks-graph.json) from the d3 example [readme-vis](https://github.com/micahstubbs/readme-vis) project and converts it to csv, then loads that csv file into neo4j

```
node convert-json-to-csv-for-neo4j.js
```

let's use this command to import the csv files we just created:

```
neo4j_home$ ./bin/neo4j-import --into data/databases/graph.db/ --nodes /Users/m/workspace/neo4j-json-demo/apoc-example/05/readme-blocks-graph-nodes.csv --relationships /Users/m/workspace/neo4j-json-demo/apoc-example/05/readme-blocks-graph-links.csv
```