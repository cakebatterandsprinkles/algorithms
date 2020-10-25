// Given a linked list, return the node n spaces from the last node in the list.
// The fromLast function should accept 2 arguments, list and n.
// Rules:
// 1. Don't call the 'size' method of the linked list.
// 2. Assume that n will always be less than the length of the list.

function fromLast(list, n) {
  let current = list.getFirst();
  let end = list.getFirst();
  let counter = 0;
  while (counter < n) {
    end = end.next;
    counter++;
  }
  while (end.next) {
    end = end.next;
    current = current.next;
  }

  return current;
}

module.exports = fromLast;
