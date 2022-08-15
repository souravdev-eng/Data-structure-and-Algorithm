/* ---------BIG O Notation ----------- 
Time Complexity --> O(n) || Space Complexity --> O(1)
*/

const maxHeight = [7, 1, 2, 3, 9];

const maxArea = function (height) {
  let maxArea = 0,
    p1 = 0,
    p2 = height.length - 1;

  while (p1 < p2) {
    const heights = Math.min(height[p1], height[p2]);
    const width = p2 - p1;
    const area = heights * width;
    maxArea = Math.max(maxArea, area);

    if (height[p2] <= height[p1]) p1++;
    else p2--;
  }
  return maxArea;
};

const res = maxArea(maxHeight);
console.log({ res });
