const fromLast = require("./index");
const LinkedListHelper = require("./linkedlist");
const List = LinkedListHelper.LinkedList;

test("fromLast is a function", () => {
  expect(typeof fromLast).toEqual("function");
});

test("fromLast returns the (end index - n)th node", () => {
  const list = new List();

  list.insertLast(11);
  list.insertLast(22);
  list.insertLast(33);
  list.insertLast(44);
  list.insertLast(55);

  expect(fromLast(list, 2).data).toEqual(33);
});
