const Node = require("./index");

test("Node is a function", () => {
  expect(typeof Node.prototype.constructor).toEqual("function");
});

test("insert method can create a node with the given data and insert it to an appropriate location", () => {
  const node = new Node(5);
  node.insert(15);
  node.insert(20);
  node.insert(25);

  expect(node.left).toEqual(null);
  expect(node.right.data).toEqual(15);
  expect(node.right.right.data).toEqual(20);
});

test("contains method returns the node with the same data", () => {
  const node = new Node(5);
  node.insert(3);
  node.insert(10);
  node.insert(6);
  node.insert(20);
  node.insert(12);
  node.insert(30);

  const target = node.right.right.left;
  expect(node.contains(12)).toEqual(target);
});

test("contains method returns null if value is not found", () => {
  const node = new Node(5);
  node.insert(3);
  node.insert(10);
  node.insert(6);
  node.insert(20);
  node.insert(12);
  node.insert(30);

  expect(node.contains(6789)).toEqual(null);
});
