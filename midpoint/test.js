const midpoint = require("./index");
const LinkedListHelper = require("./linkedlist");
const LinkedList = LinkedListHelper.LinkedList;

test("Midpoint is a function", () => {
  expect(typeof midpoint).toEqual("function");
});

describe("Midpoint returns the middle node of an odd numbered list", () => {
  test("when the list has 3 elements", () => {
    const list = new LinkedList();
    list.insertLast(1);
    list.insertLast("b");
    list.insertLast(3);
    expect(midpoint(list).data).toEqual("b");
  });

  test("when the list has 5 elements", () => {
    const list = new LinkedList();
    list.insertLast(1);
    list.insertLast("b");
    list.insertLast(3);
    list.insertLast("d");
    list.insertLast(5);
    expect(midpoint(list).data).toEqual(3);
  });
});

describe("Midpoint returns the last node on the first half of an even numbered list", () => {
  test("when the list has 2 elements", () => {
    const list = new LinkedList();
    list.insertLast(1);
    list.insertLast("b");
    expect(midpoint(list).data).toEqual(1);
  });

  test("when the list has 6 elements", () => {
    const list = new LinkedList();
    list.insertLast(1);
    list.insertLast("b");
    list.insertLast(2);
    list.insertLast("d");
    list.insertLast(3);
    list.insertLast("e");
    expect(midpoint(list).data).toEqual(2);
  });
});
