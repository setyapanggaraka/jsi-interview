function findLongestSubstring(str) {
  let maxLen = 0;
  let start = 0;
  let charMap = {};

  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];

    if (currentChar in charMap && charMap[currentChar] >= start) {
      start = charMap[currentChar] + 1;
    } else {
      maxLen = Math.max(maxLen, i - start + 1);
    }

    charMap[currentChar] = i;
  }

  return maxLen;
}

console.log(findLongestSubstring("abcabcbb")); // output: 3
console.log(findLongestSubstring("bbbbbb")); // output: 1
console.log(findLongestSubstring("pwwkew")); // output: 3
