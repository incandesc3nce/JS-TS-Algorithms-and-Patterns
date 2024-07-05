/**
 * Queue is an abstract data type where each new item is added to the end and each item is removed 
 * from the start of queue, making it a first-in-first-out (FIFO) data structure. 
 * In a FIFO data structure, the first element added to the queue will be the first one to be removed.
 *
 * Time complexity:
 * Search: O(n)
 * Insert: O(1)
 * Delete: O(1)
 *
 * Space complexity: O(n)
 */

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    return this.items.shift();
  }

  peek() {
    return this.items[0];
  }

  getQueue() {
    return this.items;
  }

  isEmpty() {
    return this.items.length === 0;
  }
}
