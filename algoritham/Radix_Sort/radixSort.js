function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num)) + 1);
}

function mostDigits(num) {
  let maxDigits = 0;
  for (let i = 0; i < num.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(num[i]));
  }
  return maxDigits;
}

function radixSort(num) {
  let maxDigitCounts = mostDigits(num);
  for (let k = 0; k < maxDigitCounts; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < num.length; i++) {
      let digit = getDigit(num[i], k);
      digitBuckets[digit].push(num[i]);
    }
    num = [].concat(...digitBuckets);
  }
  return num;
}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));
