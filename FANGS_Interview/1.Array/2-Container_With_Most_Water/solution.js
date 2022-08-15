/* ---------BIG O Notation ----------- 
Time Complexity --> O(n2) || Space Complexity --> O(1)
*/

const maxHeight = [7, 1, 2, 3, 9];

const maxArea = function (height) {
  let maxVal = 0;

  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      const heights = Math.min(height[i], height[j]);
      const width = j - i;
      const area = heights * width;

      maxVal = Math.max(maxVal, area);
    }
  }
  return maxVal;
};

const res = maxArea(maxHeight);
console.log({ res });
