/**
 * Depth First Traversal (or DFS) for a graph is similar to Depth First Traversal of a tree.
 * The only catch here is, that, unlike trees, graphs may contain cycles (a node may be visited twice).
 * To avoid processing a node more than once, use a boolean visited array. A graph can have more than one DFS traversal.
 */

export default function dfs(startingNode, adjList) {
  const visited = new Array(Object.keys(adjList).length).fill(false);

  dfsHelper(startingNode, adjList, visited);
}

function dfsHelper(currentNode, adjList, visited) {
  visited[currentNode] = true;
  console.log(currentNode);

  for (const neighbor of adjList[currentNode] || []) {
    if (!visited[neighbor]) {
      dfsHelper(neighbor, adjList, visited);
    }
  }
}