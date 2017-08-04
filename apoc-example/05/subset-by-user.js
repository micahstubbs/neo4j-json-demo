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

filterUsers = ['curran', 'micahstubbs'];

//
// translate the node data from the existing format
// to a format closer to what neo4j expects
//
inputData.graph.nodes.forEach(inputNode => {
  // if one of our filter users created the block
  // that is the current node
  if (filterUsers.indexOf(inputNode.user) > -1) {
    outputData.graph.nodes.push(inputNode);
  }
});

const subsetNodeIDs = outputData.graph.nodes.map(d => d.id);

//
// translate the links data from the existing format
// to a format closer to what neo4j expects
//
inputData.graph.links.forEach((inputLink, i) => {
  if (
    subsetNodeIDs.indexOf(inputLink.source) > -1 ||
    subsetNodeIDs.indexOf(inputLink.target) > -1
  ) {
    outputData.graph.links.push(inputLink);
  }
});

const outputFile = `readme-blocks-graph-subset-${filterUsers.length}-users.json`;

jf.writeFile(outputFile, outputData, { spaces: 2 }, err => {
  console.log(err);
});
