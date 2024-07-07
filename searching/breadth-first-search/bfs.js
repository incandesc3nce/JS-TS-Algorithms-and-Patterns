/**
 * Breadth First Search (BFS) is a fundamental graph traversal algorithm.
 * It involves visiting all the connected nodes of a graph in a level-by-level manner.
 */

export default function bfs(startNode, adjList) {
  const queue = [];
  const visited = new Array(Object.keys(adjList).length).fill(false);

  visited[startNode] = true;
  queue.push(startNode);

  while (queue.length !== 0) {
    const currentNode = queue.shift();
    console.log(currentNode + " ");

    for (const neighbor of adjList[currentNode] || []) {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        queue.push(neighbor);
      }
    }
  }
}
