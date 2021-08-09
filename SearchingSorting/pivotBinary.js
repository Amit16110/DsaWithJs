function pivotBinary(arr, n, key) {
  let pivotPt = pivot(arr, 0, n - 1);

  if (pivotPt == -1) {
    return binarySearch(arr, 0, n - 1, key);
  }
}

function pivot(arr, low, high) {
  console.log("low, high", low, high);
  if (high < low) {
    return -1;
  }

  if (high == low) {
    return low;
  }

  let mid = low + (high - low) / 2;
  console.log("mid", mid);
  if (mid < high && arr[mid] > arr[mid + 1]) {
    return mid;
  }

  if (mid > low && arr[mid] < arr[mid - 1]) {
    return mid - 1;
  }

  if (arr[low] >= arr[mid]) {
    return pivot(arr, low, mid - 1);
  }
  return pivot(arr, mid + 1, high);
}

function binarySearch(arr, low, high, key) {
  console.log("ow, high, key", low, high, key);
  if (high < low) {
    return -1;
  }

  let mid = low + (high - low) / 2;
  console.log("mid", mid);

  if (key == arr[mid]) {
    return mid;
  }

  if (key > arr[mid]) {
    return binarySearch(arr, mid + 1, high, key);
  }
  return binarySearch(arr, low, mid - 1, key);
}

let arr = [5, 6, 7, 8, 9, 10, 1, 2, 3];
let n = arr.length;
let key = 9;

console.log(pivotBinary(arr, n, key));
