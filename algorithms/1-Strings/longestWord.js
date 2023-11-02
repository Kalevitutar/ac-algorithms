/**
Take 30 minutes to work on this assignment. Make sure to ask for help if you get stuck. If you need more than 30 minutes, we will have time on Friday. 

Read through the function and write comments to explain what is happening in the code.

 1. How would we change this to find the shortest word?
 The conditional in the if statement would be changed from > to < (probably helpful to change the variable to shortestWordLength, unless this is a vital part of the plan to confuse the enemy)
 2. How would you display the actual word in the console?
 Either replace the return line with a console.log, or before the return have a console.log - console.log(longestWordLength); or console.log(shortestWordLength);
 */

// this line sets up the function, with a parameter of str
function findLongestWord(str) {
  // this line defines the variable words by splitting the str into an array wherein each word is a separate entry
  var words = str.split(" ");
  // this line defines the variable longestWordLength and sets it at a starting point of the minimum of 0 letters long
  var longestWordLength = 0;
  // this next bit is a for loop
  // this line starts the for loop, declaring a counter variable of i, setting it at a starting point of 0, setting its maximum value to one less than the number of words in the array words - in order to capture all the words, as counting will start with 0, not 1 - and then setting the counter variable to increase each time the loop runs to move to the next word
  for (var i = 0; i < words.length; i++) {
    // this starts a conditional, checking to see if the length of the currently-analyzed word is longer than the current value of the variable longestWordLength
    if (words[i].length > longestWordLength) {
      // if the current word length is longer than the longestWordLength, then the value of the variable longestWordLength becomes the number of the length of the current word
      longestWordLength = words[i].length;
    }
  }
  // this returns the value of the longestWordLength
  return longestWordLength;
}
