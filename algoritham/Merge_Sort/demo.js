function mergeSort(arr1, arr2) {
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
console.log(mergeSort([], [14, 2, 99, 100]));
