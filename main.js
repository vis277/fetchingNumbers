/**
 * check if arr[i] is object or array
 * if object then fetch it's value and push it in blank array.
 * if array then spread it inside the blank array
 */

/**
 * convert the given array to string
 * split the string by characters
 * if conevrsion to number for  individual character is possible push that element into a blank array.
 */
const inputArray = [
  {
    a: [1, 2, 3, "text"],
  },
  [[1, 2, 3, { a: [1, 2, 3, "text"] }]],
  [2, 4, 5],
];

function con(inputArray) {
  let arr = JSON.stringify(inputArray);

  let text = arr.split("");

  let blank = [];
  for (let i = 0; i < text.length; i++) {
    if (Number(arr[i])) {
      blank.push(Number(arr[i]));
    }
  }
  return blank;
}
console.log(con(inputArray));
