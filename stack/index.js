// Create a stack data structure.
// The stack should be a class with methods 'push', 'pop', and 'peek'.

// Examples:
//   const stack = new Stack();
//   stack.push("hello");
//   stack.push(1);
//   stack.pop(); // returns 1
//   stack.pop(); // returns "hello"

class Stack {
  constructor() {
    this.data = [];
  }

  push(record) {
    this.data.push(record);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

module.exports = Stack;
