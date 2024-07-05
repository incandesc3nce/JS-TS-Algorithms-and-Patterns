/**
 * Queue is an abstract data type that can be modified by adding entities to one end of the sequence
 * and removing entities from the other end of the sequence, making it a first-in-first-out (FIFO)
 * data structure. In a FIFO data structure, the first element added to the queue will be the first one to be removed.
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
