class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(values = []) {
    this.head = null;

    for (let value of values) {
      this.insertLast(value);
    }
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
