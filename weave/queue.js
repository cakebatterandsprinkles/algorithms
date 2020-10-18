class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }

  // peek method returns the last element to be removed without removing it.
  peek() {
    return this.data[this.data.length - 1];
  }
}

module.exports = Queue;
