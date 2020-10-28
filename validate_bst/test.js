const Node = require("./node");
const validate = require("./index");

test("Validate is a function", () => {
  expect(typeof validate).toEqual("function");
});

test("Validate function returns true for a valid binary search tree", () => {
  const n = new Node(22);
  n.insert(6);
  n.insert(16);
  n.insert(-2);
  n.insert(43);

  expect(validate(n)).toEqual(true);
});

test("Validate function returns false for an invalid binary search tree", () => {
  const n = new Node(22);
  n.insert(6);
  n.insert(16);
  n.insert(-2);
  n.insert(43);
  n.left.left.right = new Node(197);

  expect(validate(n)).toEqual(false);
});
