// Write a function that accepts a positive number n.
// The function should console log a step shape with n levels using the # character.
// Make sure the step has spaces on the right hand side!

// Examples:
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps1(n) {
  if (n < 0) {
    return "Negative number of steps are illogical.";
  } else if (n === 0) {
    return "No steps!";
  }

  let stairsArr = [];
  for (let i = 1; i <= n; i++) {
    let hash = "#";
    let floor = hash.repeat(i).padEnd(n, " ");
    stairsArr.push(floor);
  }

  for (let floor of stairsArr) {
    console.log(floor);
  }
}

function steps2(n) {
  if (n < 0) {
    return "Negative number of steps are illogical.";
  } else if (n === 0) {
    return "No steps!";
  }

  for (let i = 1; i <= n; i++) {
    let hash = "#";
    let floor = hash.repeat(i).padEnd(n, " ");
    console.log(floor);
  }
}

function steps3(n) {
  if (n < 0) {
    return "Negative number of steps are illogical.";
  } else if (n === 0) {
    return "No steps!";
  }

  for (let i = 0; i < n; i++) {
    let stair = "";

    for (let j = 0; j < n; j++) {
      if (j <= i) {
        stair += "#";
      } else {
        stair += " ";
      }
    }
    console.log(stair);
  }
}

// recursion is not working!

function steps4(n, row = 0, stair = "") {
  if (n < 0) {
    return "Negative number of steps are illogical.";
  } else if (n === 0) {
    return "No steps!";
  }

  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps4(n, row++);
  }

  const add = stair.length <= row ? "#" : " ";
  steps4(n, row, stair + add);
}

module.exports = steps3;
