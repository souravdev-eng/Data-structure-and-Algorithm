//. Big O Notation of the merge sort (Time Complexity)
//. Best Case --> O(n log n), Average --> O(n log n), Worst Case --> O(n log n)

//? Space complexity O(n)

function merge(arr1, arr2) {
  let results = [];
  let arr1Idx = 0;
  let arr2Idx = 0;

  while (arr1Idx < arr1.length && arr2Idx < arr2.length) {
    if (arr2[arr2Idx] > arr1[arr1Idx]) {
      results.push(arr1[arr1Idx]);
      arr1Idx++;
    } else {
      results.push(arr2[arr2Idx]);
      arr2Idx++;
    }
  }
  while (arr1Idx < arr1.length) {
    results.push(arr1[arr1Idx]);
    arr1Idx++;
  }
  while (arr2Idx < arr2.length) {
    results.push(arr2[arr2Idx]);
    arr2Idx++;
  }
  return results;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}
console.log(mergeSort([12, 10, 64, 2, 1, 77, 46]));
