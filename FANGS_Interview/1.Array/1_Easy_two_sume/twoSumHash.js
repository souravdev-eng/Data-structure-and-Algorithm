/* ---------BIG O Notation ----------- 
Time Complexity --> O(n) || Space Complexity --> O(n)
*/

const numsArray = [1, 3, 7, 9, 2];
const targetToFind = 11;

function findTwoSum(num, target) {
  let numsMap = {};

  for (let p = 0; p < num.length; p++) {
    const currentVal = numsMap[num[p]];

    if (currentVal >= 0) {
      return [currentVal, p];
    } else {
      const numberToFind = target - num[p];
      numsMap[numberToFind] = p;
    }
  }
  return null;
}

let res = findTwoSum(numsArray, targetToFind);

console.log(res);
