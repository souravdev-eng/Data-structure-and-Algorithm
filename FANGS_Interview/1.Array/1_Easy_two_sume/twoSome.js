/* ---------BIG O Notation ----------- 
Time Complexity --> O(n2) || Space Complexity --> O(1)
*/

const numsArray = [1, 3, 7, 9, 2];
const targetToFind = 11;

function findTwoSum(num, target) {
  for (let p1 = 0; p1 < num.length; p1++) {
    const numberToFind = target - num[p1];

    for (let p2 = p1 + 1; p2 < num.length; p2++) {
      if (num[p2] === numberToFind) {
        return [p1, p2];
      }
    }
  }
  return null;
}

let res = findTwoSum(numsArray, targetToFind);

console.log(res);
