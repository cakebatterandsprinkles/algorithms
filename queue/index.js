// Create a queue data structure.
// The queue should be a class with methods 'add' and 'remove'.
// The queue should store an element until the element is purposefully removed.

// const queue = new Queue();
// queue.add(1);
// queue.remove(); // returns 1;

class Queue {
  constructor() {
    this.queue = [];
  }

  add(data) {
    this.queue.unshift(data);
  }

  remove() {
    return this.queue.pop();
  }
}

module.exports = Queue;
