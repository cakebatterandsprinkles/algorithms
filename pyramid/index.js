// Write a function that accepts a number N.
// The function should console log a pyramid shape with N floors using the # character.
// If the number is positive, the pyramid will be pointing up.
// If the number is negative, the pyramid should be pointing down.
// If the number is 0, it should print "No pyramid!"

function pyramid1(n) {
  if (n === 0) {
    console.log("No pyramid!");
  }

  let num = Math.abs(n);
  let basis;

  if (num === 1) {
    basis = 3;
  } else {
    basis = num * 2 - 1;
  }

  const midpoint = Math.floor(basis / 2);
  let pyramidArr = [];

  for (let row = 0; row < num; row++) {
    let floor = "";
    for (let col = 0; col < basis; col++) {
      if (col >= midpoint - row && col <= midpoint + row) {
        floor += "#";
      } else {
        floor += " ";
      }
    }
    pyramidArr.push(floor);
  }

  if (n < 0) {
    pyramidArr.reverse();
  }

  for (let floor of pyramidArr) {
    console.log(floor);
  }
}

module.exports = pyramid1;
