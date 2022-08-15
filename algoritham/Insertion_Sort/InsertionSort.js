// BIG O --> WORST CASE --> O(n2) BEST CASE  --> O(n)

function insertionSort(arr) {
  let currentVal, j, i;

  for (i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
      console.log(arr[j + 1], currentVal, arr);
    }
    arr[j + 1] = currentVal;
    console.log(arr[j + 1]);
  }
  return arr;
}
console.log(insertionSort([2, 6, 1, 9, 4]));
