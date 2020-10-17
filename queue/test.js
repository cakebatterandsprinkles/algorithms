const Queue = require("./index");

test("Queue is a class", () => {
  expect(typeof Queue.prototype.constructor).toEqual("function");
});

test("can add elements to a queue", () => {
  const queue = new Queue();
  expect(() => {
    queue.add("a");
  }).not.toThrow();
});

test("can remove elements from a queue", () => {
  const queue = new Queue();
  expect(() => {
    queue.add(1);
    queue.remove();
  }).not.toThrow();
});

test("can't use built-in array methods with queue", () => {
  const queue = new Queue();
  expect(() => {
    queue.add(1);
    queue.replace(1, 2);
  }).toThrow();
});

test("Order of elements is maintained", () => {
  const queue = new Queue();
  queue.add(1);
  queue.add(2);
  queue.add(3);
  expect(queue.remove()).toEqual(1);
  expect(queue.remove()).toEqual(2);
  expect(queue.remove()).toEqual(3);
  expect(queue.remove()).toEqual(undefined);
});
