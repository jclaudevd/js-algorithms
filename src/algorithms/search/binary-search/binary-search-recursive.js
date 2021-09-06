const recursiveBinarySearch = (arr, target, left = 0, right = arr.length - 1) => {
  if (left > right) return -1;

  let middle = Math.floor((left + right) / 2);

  if (arr[middle] == target) return middle;
  else if (target > arr[middle]) return recursiveBinarySearch(arr, target, middle + 1, right);
  else return recursiveBinarySearch(arr, target, left, middle - 1);
};

const arr = [1, 2, 3, 4, 5, 6, 7];

console.log(recursiveBinarySearch(arr, 5));
