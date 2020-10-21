const weave = require("./index");
const Queue = require("./queue");

test("queues have a peek function", () => {
  const q = new Queue();
  expect(typeof q.peek).toEqual("function");
});

test("peek returns the first value without removing it", () => {
  const q = new Queue();
  q.add("a");
  q.add("b");
  expect(q.peek()).toEqual("a");
  expect(q.remove()).toEqual("a");
  expect(q.peek()).toEqual("b");
  expect(q.remove()).toEqual("b");
});

test("weave is a function", () => {
  expect(typeof weave).toEqual("function");
});

test("weave can combine two queues", () => {
  const first = new Queue();
  first.add(12);
  first.add(23);
  first.add(34);
  first.add(45);
  const second = new Queue();
  second.add("onetwo");
  second.add("twothree");
  second.add("threefour");
  second.add("fourfive");

  const result = weave(first, second);
  expect(result.remove()).toEqual(12);
  expect(result.remove()).toEqual("onetwo");
  expect(result.remove()).toEqual(23);
  expect(result.remove()).toEqual("twothree");
  expect(result.remove()).toEqual(34);
  expect(result.remove()).toEqual("threefour");
  expect(result.remove()).toEqual(45);
  expect(result.remove()).toEqual("fourfive");
  expect(result.remove()).toBeUndefined();
});
