const LinkListHelper = require("./index");
const List = LinkListHelper.LinkedList;
const Node = LinkListHelper.Node;

test("List is a class", () => {
  expect(typeof List.prototype.constructor).toEqual("function");
});

test("Node is a class", () => {
  expect(typeof Node.prototype.constructor).toEqual("function");
});

describe("A Node instance", () => {
  test('has properties "data" and "next"', () => {
    const node = new Node("data, yay", "next node");
    expect(node.data).toEqual("data, yay");
    expect(node.next).toEqual("next node");
  });
});

describe("insertFirst method", () => {
  test("appends a node to the start of the list", () => {
    const list = new List();
    list.insertFirst("first");
    expect(list.head.data).toEqual("first");
    list.insertFirst(2);
    expect(list.head.data).toEqual(2);
  });
});

describe("size method", () => {
  test("returns the number of items in the linked list", () => {
    const list = new List("a");
    expect(list.size()).toEqual(1);
    list.insertFirst(1);
    list.insertFirst(2);
    list.insertFirst(3);
    expect(list.size()).toEqual(4);
  });
});

describe("getFirst method", () => {
  test("returns the first node", () => {
    const list = new List();
    list.insertFirst("a");
    expect(list.getFirst().data).toEqual("a");
    list.insertFirst(2);
    expect(list.getFirst().data).toEqual(2);
    list.insertFirst([3]);
    expect(list.getFirst().data).toEqual([3]);
  });
});

describe("getLast method", () => {
  test("returns the last node, which is the tail node", () => {
    const list = new List();
    list.insertFirst("4abc");
    expect(list.getLast()).toEqual({ data: "4abc", next: null });
    list.insertFirst("aaa");
    expect(list.getLast()).toEqual({ data: "4abc", next: null });
  });
});

describe("clear method", () => {
  test("empties the linked list", () => {
    const list = new List();
    expect(list.size()).toEqual(0);
    list.insertFirst("a");
    list.insertFirst("b");
    list.insertFirst("c");
    expect(list.size()).toEqual(3);
    list.clear();
    expect(list.size()).toEqual(0);
  });
});

describe("removeFirst method", () => {
  test("removes the first node when the list has a size of one", () => {
    const list = new List();
    list.insertFirst("abc");
    list.removeFirst();
    expect(list.size()).toEqual(0);
    expect(list.getFirst()).toEqual(null);
  });

  test("removes the first node when the list has a size of three", () => {
    const list = new List();
    list.insertFirst("cb");
    list.insertFirst("ba");
    list.insertFirst("aa");
    list.removeFirst();
    expect(list.size()).toEqual(2);
    expect(list.getFirst().data).toEqual("ba");
    list.removeFirst();
    expect(list.size()).toEqual(1);
    expect(list.getFirst().data).toEqual("cb");
  });
});

describe("removeLast method", () => {
  test("does not throw an error when the list is empty", () => {
    const list = new List();
    expect(() => {
      list.removeLast();
    }).not.toThrow();
  });

  test("removes the last node when list is length 1", () => {
    const list = new List();
    list.insertFirst(111);
    list.removeLast();
    expect(list.head).toEqual(null);
  });

  test("removes the last node when list size is 3", () => {
    const list = new List();
    list.insertFirst("c3");
    list.insertFirst("b2");
    list.insertFirst("a1");
    list.removeLast();

    expect(list.size()).toEqual(2);
    expect(list.getLast().data).toEqual("b2");
  });
});

describe("insertLast method", () => {
  test("adds a new node to the end of the list", () => {
    const list = new List();
    list.insertLast("b2");
    list.insertLast("c3");
    list.insertFirst("a1");

    expect(list.size()).toEqual(3);
    expect(list.getLast().data).toEqual("c3");
  });
});

describe("getAt method", () => {
  test("returns the node at a given index", () => {
    const list = new List();
    expect(list.getAt(10)).toEqual(null);

    list.insertLast("a");
    list.insertLast(2);
    list.insertLast("c");
    list.insertLast(4);

    expect(list.getAt(0).data).toEqual("a");
    expect(list.getAt(1).data).toEqual(2);
    expect(list.getAt(2).data).toEqual("c");
    expect(list.getAt(3).data).toEqual(4);

    expect(list.getAt(18)).toEqual(null);
  });
});

describe("removeAt method", () => {
  test("removeAt doesn't throw an error when the list is empty", () => {
    const list = new List();
    expect(() => {
      list.removeAt(0);
      list.removeAt(10);
      list.removeAt(3);
    }).not.toThrow();
  });

  test("removeAt doesn't throw an error when the given index out of bounds", () => {
    const list = new List();
    expect(() => {
      list.insertFirst("a");
      list.removeAt(1);
    }).not.toThrow();
  });

  test("removeAt method can delete the first node", () => {
    const list = new List();
    list.insertLast(1);
    list.insertLast(2);
    list.insertLast(3);
    expect(list.getAt(0).data).toEqual(1);
    list.removeAt(0);
    expect(list.getAt(1).data).toEqual(3);
  });

  test("removeAt method can delete the node at the given index", () => {
    const list = new List();
    list.insertLast(1);
    list.insertLast(2);
    list.insertLast(3);
    expect(list.getAt(1).data).toEqual(2);
    list.removeAt(1);
    expect(list.getAt(1).data).toEqual(3);
  });

  test("removeAt method works on the last node", () => {
    const list = new List();
    list.insertLast(1);
    list.insertLast(2);
    list.insertLast(3);
    expect(list.getAt(2).data).toEqual(3);
    list.removeAt(2);
    expect(list.getAt(2)).toEqual(null);
  });
});

describe("insertAt method", () => {
  test("inserts the new node to index 0 when the list is empty", () => {
    const list = new List();
    list.insertAt("hello world", 3);
    expect(list.getFirst().data).toEqual("hello world");
  });

  test("inserts the new node to index 0 when the list has other nodes", () => {
    const list = new List();
    list.insertLast("tiny");
    list.insertLast("green");
    list.insertLast("parrotlet");
    list.insertAt("hello", 0);
    expect(list.getAt(0).data).toEqual("hello");
    expect(list.getAt(1).data).toEqual("tiny");
    expect(list.getAt(2).data).toEqual("green");
    expect(list.getAt(3).data).toEqual("parrotlet");
  });

  test("inserts the new node to a middle index", () => {
    const list = new List();
    list.insertLast("parrots");
    list.insertLast("fun");
    list.insertAt("are", 1);
    expect(list.getAt(0).data).toEqual("parrots");
    expect(list.getAt(1).data).toEqual("are");
    expect(list.getAt(2).data).toEqual("fun");
  });

  test("inserts the new node to the last index", () => {
    const list = new List();
    list.insertLast("1");
    list.insertLast("2");
    list.insertAt("3", 2);
    expect(list.getAt(0).data).toEqual("1");
    expect(list.getAt(1).data).toEqual("2");
    expect(list.getAt(2).data).toEqual("3");
  });

  test("insert a new node when index is out of bounds", () => {
    const list = new List();
    list.insertLast("1");
    list.insertLast("2");
    list.insertAt("3", 28);
    expect(list.getAt(0).data).toEqual("1");
    expect(list.getAt(1).data).toEqual("2");
    expect(list.getAt(2).data).toEqual("3");
  });
});

describe("forEach method", () => {
  test("doesn't throw an error when the list is empty", () => {
    const list = new List();
    expect(() => {
      list.forEach((node) => {
        node.data += 10;
      });
    }).not.toThrow();
  });

  test("calls a given function for each node and returns something", () => {
    const list = new List();

    list.insertLast(10);
    list.insertLast(20);
    list.insertLast(30);
    list.insertLast(40);
    list.insertLast(50);

    list.forEach((node) => {
      node.data += 10;
    });

    expect(list.getAt(0).data).toEqual(20);
    expect(list.getAt(1).data).toEqual(30);
    expect(list.getAt(2).data).toEqual(40);
    expect(list.getAt(3).data).toEqual(50);
    expect(list.getAt(4).data).toEqual(60);
  });
});

describe("for...of loops", () => {
  test("work with the linked list", () => {
    const list = new List();

    list.insertLast(10);
    list.insertLast(20);
    list.insertLast(30);
    list.insertLast(40);
    list.insertLast(50);

    for (let node of list) {
      node.data += 10;
    }

    expect(list.getAt(0).data).toEqual(20);
    expect(list.getAt(1).data).toEqual(30);
    expect(list.getAt(2).data).toEqual(40);
    expect(list.getAt(3).data).toEqual(50);
    expect(list.getAt(4).data).toEqual(60);
  });

  test("for...of does not throw an error on an empty list", () => {
    const list = new List();
    expect(() => {
      for (let node of list) {
      }
    }).not.toThrow();
  });
});
