// Validate the binary search tree, ensuring that every node's left child is
// less than the parent node's value, and that every node's right child is greater than
// the parent node's value. The valdiate function should take the root node as an argument.

function validate(node, min = null, max = null) {
  if (max !== null && node.data > max) {
    return false;
  }
  if (min !== null && node.data < min) {
    return false;
  }
  if (node.left && !validate(node.left, min, node.data)) {
    return false;
  }
  if (node.right && !validate(node.right, node.data, max)) {
    return false;
  }
  return true;
}

module.exports = validate;
