const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) return i;
  }
  return -1;
};

const arr = [1, 4, 5, 2, 3, 8, 7, 9, 0];
const arr2 = ["a", "b", "c", "d"];

console.log(linearSearch(arr, 1));
console.log(linearSearch(arr2, "d"));
