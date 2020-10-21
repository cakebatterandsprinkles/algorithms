// Implement a queue data structure using two stacks.
// Queue should implement the methods 'add', 'remove', and 'peek'.

const Stack = require("./stack");

class Queue {
  constructor() {
    this.data = new Stack();
    this.finalData = new Stack();
  }
  add(record) {
    this.data.push(record);
  }

  remove() {
    while (this.data.peek()) {
      this.finalData.push(this.data.pop());
    }
    const record = this.finalData.pop();
    while (this.finalData.peek()) {
      this.data.push(this.finalData.pop());
    }
    return record;
  }

  peek() {
    while (this.data.peek()) {
      this.finalData.push(this.data.pop());
    }
    const record = this.finalData.peek();
    while (this.finalData.peek()) {
      this.data.push(this.finalData.pop());
    }
    return record;
  }
}

module.exports = Queue;
