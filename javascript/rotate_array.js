function rotateArray(arr, k) {
  const idx = k % arr.length;
  return arr.slice(-idx).concat(arr.slice(0, -idx));
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [4, 1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3, 4], 1));

  console.log("");

  console.log("Expecting: [2, 3, 1]");
  console.log("=>", rotateArray([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3], 3));

  console.log("expecting [3, 1, 2]");
  console.log(rotateArray([1, 2, 3], 4));
}

module.exports = rotateArray;

// Please add your pseudocode to this file
// And a written explanation of your solution
/*
[1, 2, 3, 4], 2
[3, 4, 1, 2]
[1, 2, 3], 4
[3, 1, 2]
[1, 2, 3, 4], 3
[2, 3, 4, 1]
[1, 2, 3], 0
[1, 2, 3]
[1, 2, 3], 5
[2, 3, 1]
[1, 2], 4
[1, 2]
  const idx = k%length;
return arr.slice(-idx) concat with arr.slice(0, -idx)
*/
