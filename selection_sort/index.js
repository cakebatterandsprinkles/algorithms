// Implement selectionSort.

function swapper(arr, index1, index2) {
  let value1 = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = value1;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }

    if (indexOfMin !== i) {
      swapper(arr, indexOfMin, i);
    }
  }
  return arr;
}

module.exports = selectionSort;
