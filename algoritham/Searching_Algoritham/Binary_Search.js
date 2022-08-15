console.clear();
// Big O of the Binary Search is -->
// Worst and Average Case is O(log n) && The best case is O(1)

function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== val && start <= end) {
    if (val < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === val ? middle : -1;
}

console.log(binarySearch([1, 3, 6, 8, 12, 14, 17, 24, 45, 66], 10));
