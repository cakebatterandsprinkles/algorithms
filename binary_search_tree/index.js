// Implement the Node class to create a binary search tree.
// The constructor should initialize 3 properties with each instance of Node class:
// 'data', 'left', and 'right'.
// Node class should have an 'insert' method which takes a 'data' argument.
// The 'insert' method should create a new node with the given data and insert it in an appropriate location in the tree.
// Node class should also have a 'contains' method which takes a 'data' argument and return the node within the tree that has the same value.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  // recursive solution:
  insert(data) {
    if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    } else if (data < this.data && this.left) {
      this.left.insert(data);
    } else if (data < this.data) {
      this.left = new Node(data);
    }
  }

  contains(data) {
    if (this.data === data) {
      console.log(this);
      return this;
    }

    if (this.data > data && this.left) {
      return this.left.contains(data);
    } else if (this.data < data && this.right) {
      return this.right.contains(data);
    }

    return null;
  }
}

module.exports = Node;
