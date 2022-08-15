// BIG O --> O(n)
// ES2015
function swap(arr, index1, index2) {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    // SWAPPING LOGIC
    if (i !== min) swap(arr, i, min);
  }
  return arr;
}

console.log(selectionSort([12, 2, 6]));
