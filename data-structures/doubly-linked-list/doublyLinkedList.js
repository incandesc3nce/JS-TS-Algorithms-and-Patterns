/**
 * Doubly linked list is a data structure similar to singly linked list but the 
 * nodes are connected to not only next, but also previous nodes using pointers. 
 * Doubly linked list allows to do insertion and deletion operations in constant 
 * time of O(1), when array does it in O(n), but it comes with a trade-off of 
 * access time complexity being O(n).
 * 
 * Time complexity:
 * Access: O(n)
 * Search: O(n)
 * Insert: O(1)
 * Delete: O(1)
 * 
 * Space complexity: O(n)
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(element) {
    let node = new Node(element);

    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    this.size += 1;
  }

  prepend(element) {
    let node = new Node(element);

    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }

    this.size += 1;
  }

  getHead() {
    return this.head.value;
  }

  getTail() {
    return this.tail.value;
  }

  at(index) {
    let it = 0;
    let current = this.head;

    while (it < index) {
      current = current.next;
      it += 1;
    }

    return current.value;
  }

  pop() {
    if (this.head.next === null) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }

    this.size -= 1;
  }

  contains(value) {
    let current = this.head;

    if (current.next === null) return current.value === value;

    while (current) {
      if (current.value === value) return true;

      current = current.next;
    }

    return false;
  }

  find(value) {
    let current = this.head;
    let index = 0;

    if (current.next === null) {
      return current.value === value ? index : null;
    }

    while (current) {
      if (current.value === value) return index;

      current = current.next;
      index += 1;
    }

    return null;
  }

  insertAt(value, index) {
    let node = new Node(value);
    let curr, prev;

    if (index === 0) {
      this.prepend(value);
    } else {
      curr = this.head;
      let it = 0;

      while (it < index) {
        it += 1;
        prev = curr;
        curr = curr.next;
      }

      node.next = curr;
      prev.next = node;
    }

    this.size += 1;
  }

  removeAt(index) {
    let it = 0;
    let curr = this.head;
    let prev;

    if (index === 0) {
      this.head = curr.next;
    } else {
      while (it < index) {
        it += 1;
        prev = curr;
        curr = curr.next;
      }

      prev.next = curr.next;
    }

    this.size -= 1;
  }

  toString() {
    let current = this.head;
    let str = "";

    if (current.next === null) return current.value;

    str += `${null} <-> `;
    while (current) {
      str += `( ${current.value} ) <-> `;
      current = current.next;
    }
    str += `${null}`;

    return str;
  }
}
