/**
 * Graph is a data structure that can be used to represent complex, non-linear relationships. 
 * A graph consists of nodes (also called vertices) that are connected by edges (also called arcs).
 */

import Queue from "../queue/queue";

export default class Graph {
  constructor(verticesAmount) {
    this.verticesAmount = verticesAmount;
    this.adjList = new Map();
  }

  addVertex(vertex) {
    this.adjList.set(vertex, []);
  }

  addEdge(vertex1, vertex2) {
    this.adjList.get(vertex1).push(vertex2);
    this.adjList.get(vertex2).push(vertex1);
  }

  printGraph() {
    let keys = this.adjList.keys();

    for (let i of keys) {
      let neighbors = this.adjList.get(i);
      let connectedTo = "";

      for (let j of neighbors) {
        connectedTo += j + " ";
      }
      console.log(i + " -> " + connectedTo);
    }
  }

  bfs(startingNode) {
    let visited = {};

    let queue = new Queue();
    visited[startingNode] = true;

    queue.enqueue(startingNode);

    while (!queue.isEmpty()) {
      let current = queue.dequeue();
      console.log(current);

      let neighbors = this.adjList.get(current);
      for (let neigh of neighbors) {
        if (!visited[neigh]) {
          visited[neigh] = true;
          queue.enqueue(neigh);
        }
      }
    }
  }

  dfs(startingNode) {
    let visited = {};
    this.dfsHelper(startingNode, visited);
  }

  dfsHelper(startingNode, visited) {
    visited[startingNode] = true;
    console.log(startingNode);

    let neighbors = this.adjList.get(startingNode);

    for (let neigh of neighbors) {
      if (!visited[neigh]) {
        this.dfsHelper(neigh, visited);
      }
    }
  }
}
