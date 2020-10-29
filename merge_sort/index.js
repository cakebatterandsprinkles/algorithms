// implement mergeSort

function merge(sortedArr1, sortedArr2) {
  const results = [];
  while (sortedArr1.length && sortedArr2.length) {
    for (let i = 0; i < sortedArr1.length; i++) {
      if (sortedArr1[0] < sortedArr2[0]) {
        results.push(sortedArr1.shift());
      } else if (sortedArr2[0] < sortedArr1[0]) {
        results.push(sortedArr2.shift());
      }
    }
  }
  return [...results, ...sortedArr1, ...sortedArr2];
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  const center = Math.floor(arr.length / 2);

  let left = arr.slice(0, center);
  let right = arr.slice(center);

  return merge(mergeSort(left), mergeSort(right));
}

module.exports = { merge, mergeSort };
