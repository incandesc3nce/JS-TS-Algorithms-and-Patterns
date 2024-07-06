class Graph {
  constructor() {
    this.adjList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjList[vertex]) {
      this.adjList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    this.adjList[vertex1].push(vertex2);
    this.adjList[vertex2].push(vertex1);
  }

  clear() {
    this.adjList = {};
  }
}

class Knight extends Graph {
  constructor() {
    super();
  }

  isValidMove(x, y) {
    return (x >= 0 && x < 8 && y >= 0 && y < 8);
  }
  
  bfs(start, end) {
    const directions = [
      [2, 1], [2, -1], [-2, 1], [-2, -1],
      [1, 2], [1, -2], [-1, 2], [-1, -2]
    ];
  
    let queue = [];
    let visited = Array.from({ length: 8 }, () => Array(8).fill(false));
  
    queue.push({ pos: [start[0], start[1]], dist: 0, path: [[start[0], start[1]]] });
    visited[start[0]][start[1]] = true;
  
    while (queue.length > 0) {
      let { pos, dist, path } = queue.shift();
      let [x, y] = pos;
  
      if (x === end[0] && y === end[1]) {
        return { distance: dist, path: path };
      }
  
      for (let [dx, dy] of directions) {
        let nx = x + dx;
        let ny = y + dy;
  
        if (this.isValidMove(nx, ny) && !visited[nx][ny]) {
          visited[nx][ny] = true;
          queue.push({ pos: [nx, ny], dist: dist + 1, path: [...path, [nx, ny]] });
        }
      }
    }
  
    return { distance: -1, path: [] }; // If no path is found
  }
}

const logMoves = (moves) => {
  let str = `You made it in ${moves.distance} ${
    moves.distance > 1 ? "moves" : "move"
  }! Here's your path:`;

  moves.path.forEach((move) => {
    str += `\n${move}`;
  });

  console.log(str);
};

const knightMoves = (start, destination) => {
  const knight = new Knight();
  knight.addVertex(start);

  const moves = knight.bfs(start, destination);
  logMoves(moves);
};

knightMoves([3, 3], [4, 3]);
