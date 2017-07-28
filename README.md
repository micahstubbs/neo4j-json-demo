# neo4j-json-demo

a working demo project based on this neo4j [Cypher: LOAD JSON from URL AS Data](https://neo4j.com/blog/cypher-load-json-from-url/) blog post

auth headers snippet taken from this [neo4j Api authentication](http://voidcanvas.com/how-to-write-a-basic-read-write-operation-of-neo4j-with-node-js-in-express-apis/) blog post

base64 encoding with nodejs from this [stackoverflow answer](https://stackoverflow.com/a/6182519/1732222)
```
console.log(new Buffer("neo4j:neo4j").toString('base64'));
// bmVvNGo6bmVvNGo=
```