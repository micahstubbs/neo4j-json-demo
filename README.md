# neo4j-json-demo

a working demo project based on this neo4j [Cypher: LOAD JSON from URL AS Data](https://neo4j.com/blog/cypher-load-json-from-url/) blog post

auth headers snippet taken from the `Api authentication` section of this nice [blog post](http://voidcanvas.com/how-to-write-a-basic-read-write-operation-of-neo4j-with-node-js-in-express-apis/) blog post

base64 encoding with nodejs from this [stackoverflow answer](https://stackoverflow.com/a/6182519/1732222)
```
node
> console.log(new Buffer("neo4j:neo4j").toString('base64'));
bmVvNGo6bmVvNGo=
```

## usage 

start neo4j (I clicked on the Mac [neo4j community edition](https://neo4j.com/download/community-edition/) app and accepted the defaults)

```
git clone git@github.com:micahstubbs/neo4j-json-demo.git
cd neo4j-json-demo
npm install
node load-json.js
```

then you can visit [http://localhost:7474/browser/](http://localhost:7474/browser/)
and run a query like this to see the relationship between users and the answers that they provided:
`MATCH p=()-[r:PROVIDED]->() RETURN p LIMIT 25`

![answers-provided-query.png](http://i.imgur.com/NmNfMDC.png)

note that your graph look different from mine. this is expected, since the request to the stackoverflow API pulls in the 100 most recent questions. 