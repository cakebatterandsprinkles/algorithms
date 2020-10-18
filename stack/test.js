const Stack = require("./index");

test("Stack is a class", () => {
  expect(typeof Stack.prototype.constructor).toEqual("function");
});

test("Stack can add and remove items and follow FILO (first in-last out)", () => {
  const stack = new Stack();
  stack.push("a");
  stack.push(1);
  expect(stack.pop()).toEqual(1);
  expect(stack.pop()).toEqual("a");
});

test("Stack can add and remove items and follow FILO (first in-last out)", () => {
  const stack = new Stack();
  stack.push("a");
  stack.push(true);
  stack.push(3);
  expect(stack.pop()).toEqual(3);
  expect(stack.pop()).toEqual(true);
  expect(stack.pop()).toEqual("a");
});

test("peek returns the first element on top of the stack but doesn't remove it", () => {
  const stack = new Stack();
  stack.push("1st");
  stack.push("2nd");
  stack.push("3rd");
  expect(stack.peek()).toEqual("3rd");
  expect(stack.pop()).toEqual("3rd");
  expect(stack.peek()).toEqual("2nd");
  expect(stack.pop()).toEqual("2nd");
  expect(stack.peek()).toEqual("1st");
  expect(stack.pop()).toEqual("1st");
});
