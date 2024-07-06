/**
 * Singly linked list is a linear data structure in which the elements are 
 * not stored in contiguous memory and each element is connected only to 
 * its next element using a pointer.
 * Linked list allows to do insertion and deletion operations in constant time (array does it in O(n)),
 * but it comes with a trade-off of access time complexity being O(n) (array's access time complexity is O(1)).
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
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(element) {
    let node = new Node(element);

    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size += 1;
  }

  prepend(element) {
    let node = new Node(element);

    if (this.head === null) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size += 1;
  }

  getHead() {
    return this.head.value;
  }

  getTail() {
    let current = this.head;

    if (current === null) return null;

    while (current.next) {
      current = current.next;
    }

    return current.value;
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
    if (this.head.next === null) this.head = null;

    let current = this.head;

    while (current.next.next) {
      current = current.next;
    }

    current.next = null;

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

    if (current === null) return null;

    while (current) {
      str += `( ${current.value} ) -> `;
      current = current.next;
    }
    str += `${null}`;

    return str;
  }
}
