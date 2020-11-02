// implement insertionSort

function swap(arr, index1, index2) {
  let lesser = arr[index2];
  arr[index2] = arr[index1];
  arr[index1] = lesser;
}

function insertionSort1(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j + 1] <= arr[j]) {
        swap(arr, j, j + 1);
      } else {
        break;
      }
    }
  }
  return arr;
}

[3, 5, 7, 4];

function insertionSort2(arr) {
  for (let i = 1; i < arr.length; i++) {
    let sorted = false;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[i] >= arr[j]) {
        const elementToInsert = arr[i];
        arr.splice(i, 1);
        arr.splice(j + 1, 0, elementToInsert);
        sorted = true;
        break;
      }
    }

    if (!sorted) {
      const elementToInsert = arr[i];
      arr.splice(i, 1);
      arr.unshift(elementToInsert);
    }
  }
  return arr;
}

module.exports = insertionSort2;
