const fs = require('fs');
const jf = require('jsonfile');

const inputData = JSON.parse(
  fs.readFileSync('readme-blocks-graph.json', 'utf-8')
);

const outputData = {
  graph: {
    nodes: [],
    links: []
  }
};

function replaceNull(value) {
  if (value === null) {
    return 'null';
  }
  return value;
}

//
// translate the node data from the existing format
// to a format closer to what neo4j expects
//
inputData.graph.nodes.forEach(inputNode => {
  outputData.graph.nodes.push({
    id: inputNode.id,
    labels: [],
    properties: {
      user: replaceNull(inputNode.user),
      createdAt: replaceNull(inputNode.createdAt),
      updatedAt: replaceNull(inputNode.updatedAt),
      description: replaceNull(inputNode.description)
    }
  });
});

//
// translate the links data from the existing format
// to a format closer to what neo4j expects
//
inputData.graph.links.forEach((inputLink, i) => {
  outputData.graph.links.push({
    id: `${i}`,
    type: 'LINKS_TO',
    source: inputLink.source,
    target: inputLink.target,
    properties: {}
  });
});

const outputFile = 'readme-blocks-graph-for-neo4j.json';

jf.writeFile(outputFile, outputData, { spaces: 2 }, err => {
  console.log(err);
});
