CALL apoc.load.json("https://dl.dropboxusercontent.com/u/67572426/small_movie_graph.json") YIELD value AS row
WITH row, row.graph.nodes AS nodes
UNWIND nodes AS node
CALL apoc.create.node(node.labels, node.properties) YIELD node AS n
SET n.id = node.id
WITH row
UNWIND row.graph.relationships AS rel
MATCH (a) WHERE a.id = rel.startNode
MATCH (b) WHERE b.id = rel.endNode
CALL apoc.create.relationship(a, rel.type, rel.properties, b) YIELD rel AS r
RETURN *