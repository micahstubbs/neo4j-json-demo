const r = require('request');
const neo4jUrl = 'http://localhost:7474/db/data/transaction/commit';
const fs = require('fs');

const inputFile = 'stackoverflow-questions-api-response.json';
const json = JSON.parse(fs.readFileSync(inputFile, 'utf8'));

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
  'WITH {json} as data UNWIND data.items as q MERGE (question:Question {id:q.question_id}) ON CREATE SET question.title = q.title, question.share_link = q.share_link, question.favorite_count = q.favorite_count MERGE (owner:User {id:q.owner.user_id}) ON CREATE SET owner.display_name = q.owner.display_name MERGE (owner)-[:ASKED]->(question) FOREACH (tagName IN q.tags | MERGE (tag:Tag {name:tagName}) MERGE (question)-[:TAGGED]->(tag)) FOREACH (a IN q.answers | MERGE (question)<-[:ANSWERS]-(answer:Answer {id:a.answer_id}) MERGE (answerer:User {id:a.owner.user_id}) ON CREATE SET answerer.display_name = a.owner.display_name MERGE (answer)<-[:PROVIDED]-(answerer))';

cypher(query, { json }, (err, result) => {
  console.log(err, JSON.stringify(result));
});
