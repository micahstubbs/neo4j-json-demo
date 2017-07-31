const r = require('request');
const neo4jUrl = 'http://localhost:7474/db/data/transaction/commit';

function cypher(query, params, cb) {
  r.post(
    {
      uri: neo4jUrl,
      headers: {
        // change `bmVvNGo6YWRtaW4=` to match
        // the base64 the hash of your
        // neo4j username and password string
        // like this 'username:password'
        Authorization: 'Basic bmVvNGo6YWRtaW4='
      },
      json: { statements: [{ statement: query, parameters: params }] }
    },
    (err, res) => {
      cb(err, res.body);
    }
  );
}

const filePath =
  '/Users/m/workspace/neo4j-json-demo/apoc-example/03/small-movie-graph.json';

const query = `CALL apoc.load.json("file://${filePath}") YIELD value AS row WITH row, row.graph.nodes AS nodes UNWIND nodes AS node CALL apoc.create.node(node.labels, node.properties) YIELD node AS n SET n.id = node.id WITH row UNWIND row.graph.links AS link MATCH (a) WHERE a.id = link.source MATCH (b) WHERE b.id = link.target CALL apoc.create.relationship(a, link.type, link.properties, b) YIELD link AS r RETURN *`;
cypher(query, {}, (err, result) => {
  console.log(err, JSON.stringify(result));
});
