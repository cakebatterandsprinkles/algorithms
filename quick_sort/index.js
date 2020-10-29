// implement quickSort

function merge(arr1, pivot, arr2) {
  return [...arr1, pivot, ...arr2];
}

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[arr.length - 1];

  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i]);
    } else if (arr[i] > pivot) {
      right.push(arr[i]);
    }
  }

  return merge(quickSort(left), pivot, quickSort(right));
}

module.exports = quickSort;
