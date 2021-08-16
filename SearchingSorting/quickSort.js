// /**
//  * *Quick Sort
//  */

var sortArray = function (nums) {
  return quickSort(nums, 0, nums.length - 1);
};

let quickSort = function (nums, l, h) {
  if (l < h) {
    let pi = partition(nums, l, h);
    quickSort(nums, l, pi - 1);
    quickSort(nums, pi + 1, h);
  }
  return nums;
};

let partition = function (nums, l, h) {
  let pivot = nums[h];
  let i = l - 1;
  for (let j = l; j <= h - 1; j++) {
    if (nums[j] <= pivot) {
      i++;
      let tmp = nums[i];
      nums[i] = nums[j];
      nums[j] = tmp;
    }
  }

  let tmp = nums[i + 1];
  nums[i + 1] = nums[h];
  nums[h] = tmp;
  return i + 1;
};

let arr = [10, 80, 30, 90, 40, 50, 70];

sortArray(arr);
console.log(arr);
