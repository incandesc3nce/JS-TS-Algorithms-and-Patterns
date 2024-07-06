/**
 * Hash Table (also known as hash map, map, dictionary or obj) is a data structure that helps with mapping 
 * keys to values for highly efficient operations like the lookup, insertion and deletion operations.
 * 
 * Time complexity:
 * Access: O(1)
 * Search: O(1)
 * Insert: O(1)
 * Delete: O(1)
 * 
 * Space complexity: O(n)
 */

class Node {
  constructor(key, value = null, next = null) {
    this.key = key;
    this.value = value;
    this.next = next;
  }
}

class HashMap {
  constructor() {
    this.bucketsArray = new Array(16).fill(null);
    this.loadFactor = 0.75;
    this.capacity = this.bucketsArray.length;
    this.itemsCount = 0;
  }

  hash(key) {
    let hashKey = 0;
    const prime = 11;
    for (let i = 0; i < key.length; i += 1) {
      hashKey += key.charCodeAt(i) * prime;
    }
    return hashKey % this.bucketsArray.length;
  }

  resize() {
    const oldArray = this.bucketsArray;
    this.capacity *= 2;
    this.bucketsArray = new Array(this.capacity).fill(null);
    this.itemsCount = 0;

    oldArray.forEach((bucket) => {
      let current = bucket;
      while (current !== null) {
        this.set(current.key, current.value);
        current = current.next;
      }
    });
  }

  set(key, value) {
    if (this.itemsCount / this.capacity >= this.loadFactor) {
      this.resize();
    }
    const bucket = this.hash(key);
    if (!this.has(key)) {
      const newNode = new Node(key, value);
      if (this.bucketsArray[bucket] === null) {
        this.itemsCount += 1;
        this.bucketsArray[bucket] = newNode;
      } else {
        let current = this.bucketsArray[bucket];
        while (current.next !== null) {
          current = current.next;
        }
        current.next = newNode;
      }
    } else {
      let current = this.bucketsArray[bucket];
      while (current !== null && current.key !== key) {
        current = current.next;
      }
      if (current !== null) {
        current.value = value;
      }
    }
  }

  get(key) {
    const bucket = this.hash(key);
    let current = this.bucketsArray[bucket];
    while (current.key !== null && current.key !== key) {
      current = current.next;
    }
    if (current === null) {
      return null;
    }
    return current.key;
  }

  has(key) {
    const bucket = this.hash(key);
    let current = this.bucketsArray[bucket];
    while (current !== null) {
      if (current.key === key) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  remove(key) {
    const bucket = this.hash(key);
    let current = this.bucketsArray[bucket];
    let prev = null;

    while (current !== null && current.key !== key) {
      prev = current;
      current = current.next;
    }

    if (current === null) {
      return;
    }

    if (prev === null && current.next === null) {
      this.itemsCount -= 1;
      this.bucketsArray[bucket] = current.next;
    } else if (prev === null) {
      this.bucketsArray[bucket] = current.next;
    } else {
      prev.next = current.next;
    }
  }

  length() {
    return this.itemsCount;
  }

  clear() {
    this.bucketsArray = new Array(16).fill(null);
    this.itemsCount = 0;
  }

  keys() {
    const keys = [];
    this.bucketsArray.forEach((bucket) => {
      let current = bucket;
      if (bucket !== null) {
        keys.push(current.key);
        while (current.next !== null) {
          current = current.next;
          keys.push(current.key);
        }
      }
    });
    return keys;
  }

  values() {
    const values = [];
    this.bucketsArray.forEach((bucket) => {
      let current = bucket;
      if (bucket !== null) {
        values.push(current.value);
        while (current.next !== null) {
          current = current.next;
          values.push(current.value);
        }
      }
    });
    return values;
  }

  entries() {
    const entries = [];
    this.bucketsArray.forEach((bucket) => {
      let current = bucket;
      if (bucket !== null) {
        entries.push([current.key, current.value]);
        while (current.next !== null) {
          current = current.next;
          entries.push([current.key, current.value]);
        }
      }
    });
    return entries;
  }
}
