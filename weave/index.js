// Implement the 'weave' function, which receives two queues as arguments and combines the contents of each into a new, third queue.
// The third queue should contain the *alterating* content of the two queues.
// The function should handle queues of different lengths without inserting 'undefined' into the new one.
// *Do not* access the array inside of any queue, only use the 'add', 'remove', and 'peek' functions.
// Example:
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

const Queue = require("./queue");

function weave(queueOne, queueTwo) {
  const weavedQueue = new Queue();

  while (queueOne.peek() || queueTwo.peek()) {
    if (queueOne.peek()) {
      weavedQueue.add(queueOne.remove());
    }

    if (queueTwo.peek()) {
      weavedQueue.add(queueTwo.remove());
    }
  }

  return weavedQueue;
}

module.exports = weave;
