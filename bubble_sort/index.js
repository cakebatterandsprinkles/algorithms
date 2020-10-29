// Implement bubbleSort.

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      let num1 = arr[j];
      let num2 = arr[j + 1];
      if (num1 > num2) {
        arr[j] = num2;
        arr[j + 1] = num1;
      }
    }
  }
  return arr;
}

module.exports = bubbleSort;
