// Create a node class. The constructor of this class should accept an argument that gets assigned
// to the data property and initialize an empty array for storing children.
// The node class should have 2 methods called 'add' and 'remove'.
// Create a tree class. The tree constructor should initialize 'root' property to null.
// Implement 'traverseBF' and 'traverseDF' methods on the tree class.
// Each method should accept a function that gets called with each element in the tree.

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }
  remove(data) {
    // arr.filter does not modify the underlying array
    this.children = this.children.filter((node) => {
      return node.data !== data;
    });
    // Or, you can use arr.splice, which modifies the array in place:
    // for (let i = 0; i < this.children.length; i++) {
    // if (data === this.children[i].data) {
    //   this.children.splice(i, 1);
    // }
    // }
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn) {
    let nodeArr = [this.root];
    while (nodeArr.length) {
      const firstNode = nodeArr.shift();
      nodeArr.push(...firstNode.children);
      fn(firstNode);
    }
  }
  traverseDF(fn) {
    let nodeArr = [this.root];
    while (nodeArr.length) {
      const firstNode = nodeArr.shift();
      nodeArr.unshift(...firstNode.children);
      fn(firstNode);
    }
  }
}

module.exports = { Tree, Node };
