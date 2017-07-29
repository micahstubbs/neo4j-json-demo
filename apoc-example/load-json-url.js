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

const query =
  'CALL apoc.load.json("https://dl.dropboxusercontent.com/u/67572426/small_movie_graph.json") YIELD value AS row WITH row, row.graph.nodes AS nodes UNWIND nodes AS node CALL apoc.create.node(node.labels, node.properties) YIELD node AS n SET n.id = node.id WITH row UNWIND row.graph.relationships AS rel MATCH (a) WHERE a.id = rel.startNode MATCH (b) WHERE b.id = rel.endNode CALL apoc.create.relationship(a, rel.type, rel.properties, b) YIELD rel AS r RETURN *';
cypher(query, {}, (err, result) => {
  console.log(err, JSON.stringify(result));
});
