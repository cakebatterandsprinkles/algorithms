// Given a string, return a new string with the reversed order.

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

// Instead of using for loops, try to use for of loops whenever you can, so that you can avoid typos.

function reverse4(str) {
  let reversed = "";
  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
}

// reduce function (ES2015) is used to condense all given values within an array into one single value.

function reverse5(str) {
  return str
    .split("")
    .reduce((reversed, character) => character + reversed, "");
}

module.exports = reverse5;
