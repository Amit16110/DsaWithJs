function merge(arr, left, mid, right) {
  let n1 = mid - left + 1;
  let n2 = right - mid;

  let LeftArray = new Array(n1);
  let RightArray = new Array(n2);

  for (let i = 0; i < n1; i++) {
    LeftArray[i] = arr[left + i];
  }
  for (let j = 0; j < n2; j++) {
    RightArray[j] = arr[mid + 1 + j];
  }

  let i = 0;
  let j = 0;
  let k = left;

  while (i < n1 && j < n2) {
    if (LeftArray[i] <= RightArray[j]) {
      arr[k] = LeftArray[i];
      i++;
    } else {
      arr[k] = RightArray[j];
      j++;
    }
    k++;
  }

  while (i < n1) {
    arr[k] = LeftArray[i];
    i++;
    k++;
  }
  while (j < n2) {
    arr[k] = RightArray[j];
    j++;
    k++;
  }
}

function mergeSort(arr, l, r) {
  if (l >= r) {
    return;
  }

  let middle = l + parseInt((r - l) / 2);
  // console.log("middle, l, r", middle, l, r);
  mergeSort(arr, l, middle);
  console.log("first");
  mergeSort(arr, middle + 1, r);
  console.log("second");
  merge(arr, l, middle, r);
  console.log("third");
}

let arr = [20, 50, 100, 25, 5, 15, 10, 30];
let len = arr.length;

mergeSort(arr, 0, len - 1);

console.log(arr, len);
