const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    console.log(`Left: ${left}, Middle: ${middle}, Right: ${right}`);
    if (arr[middle] == target) return middle;
    else if (target < arr[middle]) right = middle - 1;
    else left = middle + 1;
  }
  return -1;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr2 = ["a", "b", "c", "d", "e"];

console.log(binarySearch(arr, 6));
console.log(binarySearch(arr2, "c"));
