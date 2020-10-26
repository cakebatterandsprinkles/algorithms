// Write an algorithm that takes the root node of a tree and returns an array with each element being the level size.

// If you are given the root node of this tree: (which is 0)
//     0
//   / |  \
// 1   1   3
// |       |
// 2       3
// |\     / \
// 5 4    2  6

// Answer: [1, 3, 2, 4]

function levelSize1(root) {
  const result = [];
  const stopper = "end of level";
  let counter = 0;
  const levelArr = [root, stopper];
  while (levelArr.length > 1) {
    let currentNode = levelArr.shift();
    if (currentNode === stopper) {
      result.push(counter);
      levelArr.push(stopper);
      counter = 0;
    } else {
      levelArr.push(...currentNode.children);
      counter++;
    }
  }
  result.push(counter);
  return result;
}

function levelSize2(root) {
  const arr = [root, "s"];
  const counters = [0];

  while (arr.length > 1) {
    const node = arr.shift();
    if (node === "s") {
      counters.push(0);
      arr.push("s");
    } else {
      counters[counters.length - 1]++;
      arr.push(...node.children);
    }
  }
  return counters;
}

module.exports = levelSize1;
