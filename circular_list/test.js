const circular = require("./index");
const LinkedListHelper = require("./linkedlist");
const LinkedList = LinkedListHelper.LinkedList;
const Node = LinkedListHelper.Node;

test("circular", () => {
  expect(typeof circular).toEqual("function");
});

test("circular function returns true for circular linked lists", () => {
  const list = new LinkedList();
  const a = new Node(1);
  const b = new Node(2);
  const c = new Node(3);

  list.head = a;
  a.next = b;
  b.next = c;
  c.next = a;

  expect(circular(list)).toEqual(true);
});

test("circular function detects circular linked lists linked in the middle", () => {
  const list = new LinkedList();
  const a = new Node(1);
  const b = new Node(2);
  const c = new Node(3);
  const d = new Node(4);
  const e = new Node(5);

  list.head = a;
  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;
  e.next = c;

  expect(circular(list)).toEqual(true);
});

test("circular returns false for non-circular linked lists", () => {
  const list = new LinkedList();
  const a = new Node(1);
  const b = new Node(2);
  const c = new Node(3);

  list.head = a;
  a.next = b;
  b.next = c;

  expect(circular(list)).toEqual(false);
});
