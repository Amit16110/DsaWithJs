const binarySearch = (arr, len, ele) => {
  let left = 0;
  let right = len - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (arr[middle] == ele) {
      return middle;
    }
    if (arr[middle] < ele) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return -1;
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let len = arr.length;

const searchResult = binarySearch(arr, len, 5);

console.log(searchResult);
