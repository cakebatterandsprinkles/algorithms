const Queue = require("./index");

test("Queue is a class", () => {
  expect(typeof Queue.prototype.constructor).toEqual("function");
});

test("can add data to a queue", () => {
  const queue = new Queue();
  expect(() => {
    queue.add("hello");
  }).not.toThrow();
});

test("can remove data from a queue", () => {
  const queue = new Queue();
  expect(() => {
    queue.add("hello");
    queue.remove();
  }).not.toThrow();
});

test("Order of data is maintained", () => {
  const queue = new Queue();
  queue.add(1);
  queue.add(2);
  queue.add(3);
  expect(queue.remove()).toEqual(1);
  expect(queue.remove()).toEqual(2);
  expect(queue.remove()).toEqual(3);
  expect(queue.remove()).toEqual(undefined);
});

test("peek returns the first value without removing it", () => {
  const queue = new Queue();
  queue.add(1);
  queue.add(2);
  expect(queue.peek()).toEqual(1);
  expect(queue.peek()).toEqual(1);
  expect(queue.remove()).toEqual(1);
  expect(queue.remove()).toEqual(2);
});
