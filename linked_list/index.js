// Implement classes Node and Linked List
// Node should have 2 properties, which are 'data' and 'next'.
// Node constructor should accept these properties as arguments, and the default for next should be null.
// Linked list should have no head node associated with it when first created.
// Linked list instances should have one head property, which refers to the first node of the linked list, and default value of it should be null.
// Linked list should have a method called 'insertFirst' with a 'data' argument, which assigns the node created to the head property.
// Linked list should have a method called 'size' which returns the number of nodes in the list.
// Linked list should have a method called 'getFirst' which returns the first node of a linked list.
// Linked list should have a method called 'getLast' which returns the last node of a linked list.
// Linked list should have a method called 'clear' which empties the linked list.
// Linked list should have a method called 'removeFirst' which removes the first node of a linked list (the head node should be replaced with the second one on the list).
// Linked list should have a method called 'removeLast' which removes the last node of a linked list.
// Linked list should have a method called 'insertLast' which should take 'data' as an argument and insert that data at the end of the chain.
// Linked list should have a method called 'getAt' which should take an integer as an argument and return the node at the provided index.
// Linked list should have a method called 'removeAt' which should take an integer as an argument and remove the node at the provided index.
// Linked list should have a method called 'insertAt' which should take data and an integer as arguments and insert the provided data to the given index.
// Linked list should have a method called 'forEach' which should take a function as an argument and call the provided function for each node in the linked list.
// Linked list should be compatible for the for...of loop.

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(headNode = null) {
    this.head = headNode;
  }

  insertFirst(data) {
    const newNode = new Node(data, this.head);
    this.head = newNode;
  }

  size() {
    if (!this.head) {
      return 0;
    }
    let counter = 0;
    const headNode = this.head;
    while (this.head.next) {
      counter++;
      this.head = this.head.next;
    }
    this.head = headNode;
    return counter + 1;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }
    const headNode = this.head;
    while (this.head.next) {
      this.head = this.head.next;
    }
    const tailNode = this.head;
    this.head = headNode;
    return tailNode;

    // or if you have a more generic method like getAt already available to you:
    // return this.getAt(this.size()-1);
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
    }
  }

  removeLast() {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let previousNode = this.head;
    let currentNode = this.head.next;
    while (currentNode.next) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    previousNode.next = null;

    // or if you have a more generic method like getAt already available to you:
    // if (!this.head) {
    //   return;
    // }
    // if (!this.head.next) {
    //   this.head = null;
    //   return;
    // }
    // this.getAt(this.size() - 2).next = null;
  }

  insertLast(data) {
    const newNode = new Node(data);
    let currentNode = this.head;
    if (!currentNode) {
      this.head = newNode;
      return;
    }
    while (this.head.next) {
      this.head = this.head.next;
    }
    this.head.next = newNode;
    this.head = currentNode;

    // Or, you can use the getLast method you created before:
    // const lastNode = this.getLast();
    // if (lastNode) {
    //    lastNode.next = new Node(data);
    //    return;
    // }
    // this.head = new Node(data);
  }

  getAt(index) {
    // Linked lists are 0 indexed.
    let counter = 0;
    let headNode = this.head;
    if (!this.head) {
      return null;
    }

    while (this.head.next && counter !== index) {
      counter++;
      this.head = this.head.next;
    }

    const wantedNode = this.head;
    this.head = headNode;
    if (counter < index) {
      return null;
    }
    return wantedNode;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    const previousNode = this.getAt(index - 1);
    if (!previousNode || !previousNode.next) {
      return;
    }
    previousNode.next = previousNode.next.next;
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
    }

    const previousNode = this.getAt(index - 1) || this.getLast();
    const newNode = new Node(data, previousNode.next);
    previousNode.next = newNode;
  }

  forEach(fn) {
    let node = this.head;
    while (node) {
      fn(node);
      node = node.next;
    }
  }

  // This defines a generator function with the key of Symbol.iterator
  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
