/**
 * * Reverse an array or string
 * ! Iterative way
 */
function reverse(arr, n) {
  let start = 0;
  let end = n;

  while (start < end) {
    let temp;
    temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start = start + 1;
    end = end - 1;
  }
  return arr;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let n = arr.length - 1;

let datahere = reverse(arr, n);
console.log(datahere);
