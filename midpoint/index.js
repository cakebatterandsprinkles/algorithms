// Return the 'middle' node of a linked list.
// If the list has an even number of nodes, return the last node of the first half of the list.
// Rules:
// 1. Don't use a counter variable.
// 2. Don't retrieve the size of the list.
// 3. Iterate through the list just a single time.

function midpoint(list) {
  let slow = list.getFirst();
  let fast = list.getFirst();

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

module.exports = midpoint;
