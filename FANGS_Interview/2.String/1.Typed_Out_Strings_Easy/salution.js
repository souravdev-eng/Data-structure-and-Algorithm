/* ---------BIG O Notation ----------- 
Time Complexity --> O(n) || Space Complexity --> O(1)
*/
const string1 = 'ab#z';
const string2 = 'az#z';

const buildString = function (string) {
  let buildArray = [];

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== '#') buildArray.push(string[i]);
    else buildArray.pop();
  }
  return buildArray.join('');
};

const backspaceCompare = function (S, T) {
  const finalS = buildString(S);
  const finalT = buildString(T);
  return finalS === finalT;
};

console.log(backspaceCompare(string1, string2));
