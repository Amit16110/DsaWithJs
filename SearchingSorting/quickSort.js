/**
 * *Quick Sort
 */

// ! Swap function.
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// !partition function Heart of quick sort.
function partition(arr, start, end) {
  //  * last element consider pivot point.
  let pivot = arr[end];
  // console.log("🐯", pivot);
  let i = start - 1;
  console.log("📲", i);
  for (let j = 0; j < end - 1; j++) {
    if (arr[j] < pivot) {
      console.log("🚀🚨", arr);
      i++;
      console.log("🚀1", arr);
      swap(arr, i, j);
      console.log("🚀", arr);
    }
  }
  swap(arr, i + 1, end);
  return i + 1;
}

function quickSort(arr, start, end) {
  if (start < end) {
    let pi = partition(arr, start, end);

    // console.log("partition here 🙂", pi);
    quickSort(arr, start, pi - 1);
    quickSort(arr, pi + 1, end);
  }
}

let arr = [10, 7, 8, 9, 1, 5];
let n = arr.length;

quickSort(arr, 0, n - 1);
console.log("Sorting Error 🤞", arr);
