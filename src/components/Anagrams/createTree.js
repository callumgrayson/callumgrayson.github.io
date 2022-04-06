//
const setWordsToObject = (list) => {
  const len = list.length;
  let wordsObj = {};
  let currentNode = {};

  // iterate through list or words
  for (let i = 0; i < len; i++) {
    let word = list[i];
    let lenWord = word.length;
    currentNode = wordsObj;

    // iterate through chars in word
    for (let j = 0; j < lenWord; j++) {
      let char = word[j];
      let end = j === lenWord - 1 ? true : false;
      let nodeExists = currentNode.hasOwnProperty(char);

      if (!nodeExists) {
        currentNode[char] = { end: end };
      } else {
        if (currentNode[char].end === false && end === true) {
          currentNode[char].end = true;
        }
      }
      currentNode = currentNode[char];
    }
  }
  return wordsObj;
};

export const handleData = async (list) => {
  const split = list.split("\n").map((w) => w.toLowerCase());

  const wordsObj = setWordsToObject(split);

  return [wordsObj, split];
};

export const checkAnagrams = async (iWord, inArr) => {
  let inWord = iWord.trim().toLowerCase();
  // console.log('inWord', inWord);
  // let startSearch = Date.now();
  const inLength = inWord.length;
  const inWordSorted = inWord.split("").sort().join("");
  let temp = [];
  inArr.forEach((word) => {
    if (word.length === Number(inLength)) {
      const sorted = word.split("").sort().join("");
      if (sorted === inWordSorted) {
        temp.push(word);
      }
    }
  });
  // let endSearch = Date.now();
  // let durationSearch = endSearch - startSearch;
  // console.log('durationSearch', durationSearch);

  // console.log('temp', temp);
  return temp;
};

export const getXLengthWords = async (inLength, wArr) => {
  //
  // let startSearch = Date.now();
  let temp = {};
  wArr.forEach((word) => {
    if (word.length === Number(inLength)) {
      const sorted = word.split("").sort().join("");
      if (!temp.hasOwnProperty(sorted)) {
        temp[sorted] = [word];
      } else {
        temp[sorted] = [...temp[sorted], word];
      }
    }
  });

  const xLengthAnagrams = [];
  Object.values(temp).forEach((arr) => {
    if (arr.length > 1) xLengthAnagrams.push(arr);
  });
  // let endSearch = Date.now();
  // let durationSearch = endSearch - startSearch;

  // let startSort = Date.now();
  const sortedAnagrams = xLengthAnagrams.sort((a, b) => b.length - a.length);
  // let endSort = Date.now();
  // let durationSort = endSort - startSort;

  // console.log('sortedAnagrams', sortedAnagrams);
  // console.log('durationSearch', durationSearch);
  // console.log('durationSort', durationSort);
  return sortedAnagrams;
};
