// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse1(str) {
  return str.split("").reverse().join("");
}

function reverse2(str) {
  let reversedArr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    reversedArr.push(str[i]);
  }
  return reversedArr.join("");
}

function reverse3(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }
  return reversed;
}

// Instead of using for loops, try to use for of loops, so that you can avoid typos.

function reverse4(str) {
  let reversed = "";
  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
}

module.exports = reverse1;
