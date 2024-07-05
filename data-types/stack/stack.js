/**
 * Stack is an abstract data type where each new item is added to the start of the stack and each item is removed
 * from the start of the stack, making it a last-in-first-out (LIFO) data structure.
 * In a LIFO data structure, the first element added to the queue will be the last one to be removed.
 *
 * Time complexity:
 * Search: O(n)
 * Insert: O(1)
 * Delete: O(1)
 *
 * Space complexity: O(n)
 */

class Stack {
  constructor() {
    this.items = [];
  }

  add(item) {
    this.items.unshift(item);
  }

  remove() {
    return this.items.shift();
  }

  peek() {
    return this.items[0];
  }

  getStack() {
    return this.items;
  }

  isEmpty() {
    return this.items.length === 0;
  }
}
