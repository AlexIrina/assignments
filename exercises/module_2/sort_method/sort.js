// high ordered method
// sort() sorts data
// Doesn't return a new array
// it changes the array that you're sorting..mutates array
// sort by ranking or sort by num of likes a video/photo has

const arr = [34, 6, 22, 1, 6, 44, 3, 64, 234, 5];

// return least to greatest
const smallBig = arr.sort((x, y) => x - y);
console.log(smallBig);
// return greatest to least
const bigSmall = arr.sort((x, y) => y - x);
console.log(bigSmall);
