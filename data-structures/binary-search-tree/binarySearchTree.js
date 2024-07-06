/**
 * Binary Search Tree is a data structure used for organizing and storing data in a sorted manner. 
 * Each node in a Binary Search Tree has at most two children, a left child and a right child, with 
 * the left child containing values less than the parent node and the right child containing values 
 * greater than the parent node. This hierarchical structure allows for efficient searching, insertion, 
 * and deletion operations on the data stored in the tree.
 * 
 * Time Complexity: 
 * Access, Search, Insert, Delete:
 * Average: O(log(n))
 * Worst: O(n) 
 *
 * Space Complexity: O(n)
 */

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function buildTree(arr, start, end) {
  if (start > end) return null;

  const mid = Math.floor((start + end) / 2);
  const root = new Node(arr[mid]);

  root.left = buildTree(arr, start, mid - 1);
  root.right = buildTree(arr, mid + 1, end);

  return root;
}

class BinarySearchTree {
  constructor(arr) {
    this.root = buildTree(arr, 0, arr.length - 1);
  }

  insert(node, value) {
    if (node === null) {
      return new Node(value);
    }

    if (value < node.value) {
      node.left = this.insert(node.left, value);
    } else if (value > node.value) {
      node.right = this.insert(node.right, value);
    }

    return node;
  }

  delete(root, value) {
    if (root === null) return root;

    if (value < root.value) {
      root.left = this.delete(root.left, value);
    } else if (value > root.value) {
      root.right = this.delete(root.right, value);
    } else {
      if (root.left === null) {
        return root.right;
      } else if (root.right === null) {
        return root.left;
      }

      root.value = this.minValue(root.right);

      root.right = this.delete(root.right, root.value);
    }

    return root;
  }

  minValue(node) {
    let minValue = node.value;
    while (node.left !== null) {
      minValue = node.left.value;
      node = node.left;
    }
    return minValue;
  }

  find(node, value) {
    if (node === null) return null;

    if (value < node.value) {
      return this.find(node.left, value);
    } else if (value > node.value) {
      return this.find(node.right, value);
    } else {
      return node;
    }
  }

  // Breadth-first search, BFS
  levelOrder(callback) {
    if (this.root === null) return;

    const array = [];
    const queue = [];
    let node = this.root;
    queue.push(node);

    while (queue.length > 0) {
      node = queue[0];

      if (callback) callback(node);
      array.push(node.value);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      queue.shift();
    }

    return array;
  }

  // Depth-first search, DFS
  // Pre-order traversal path - root, left, right
  preOrder(root, callback) {
    const array = [];
    function traverse(node) {
      if (node === null) return;

      if (callback) callback(node);
      array.push(node.value);
      traverse(node.left);
      traverse(node.right);
    }

    traverse(root);

    return array;
  }

  // In-order traversal path - left, root, right
  inOrder(root, callback) {
    const array = [];

    function traverse(node) {
      if (node === null) return;

      traverse(node.left);
      if (callback) callback(node);
      array.push(node.value);
      traverse(node.right);
    }

    traverse(root);

    return array;
  }

  // Post-order traversal path - left, right, root
  postOrder(root, callback) {
    const array = [];

    function traverse(node) {
      if (node === null) return;

      traverse(node.left);
      traverse(node.right);
      if (callback) callback(node);
      array.push(node.value);
    }

    traverse(root);

    return array;
  }

  height(node) {
    if (node === null) return 0;

    return Math.max(this.height(node.left), this.height(node.right)) + 1;
  }

  depth(node) {
    let depth = 0;
    if (node === null) return -1;

    let current = this.root;

    while (current) {
      if (current.value === node.value) {
        return depth;
      } else if (current.value > node.value) {
        current = current.left;
      } else if (current.value < node.value) {
        current = current.right;
      }
      depth += 1;
    }

    return -1;
  }

  isBalanced(root) {
    function calculateBalance(node) {
      if (node === null) return 0;

      let lh = calculateBalance(node.left);
      if (lh === -1) return -1;

      let rh = calculateBalance(node.right);
      if (rh === -1) return -1;

      if (Math.abs(lh - rh) > 1) return -1;

      return Math.max(lh, rh) + 1;
    }

    return calculateBalance(root) > 0;
  }

  rebalance() {
    const array = this.inOrder(this.root);
    this.root = null;
    this.root = buildTree(array, 0, array.length - 1);
  }

  prettyPrint(node, prefix = "", isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? "│   " : "    "}`,
        false
      );
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  }
}
