const readline = require('readline-sync');

const input = readline
  .question('What phrase would you like to encrypt? ')
  .toLowerCase();

const shift = parseInt(
  readline.question('How many letters would you like to shift? ')
);

// For this exercise, you will be implementing a Caesar Cipher using Javascript. Your program will receive two inputs:

// The text to be encoded

// The number positions to shift each letter (to the right)

// You only have to shift letters that are part of the 26-letter alphabet. Any other characters (such as spaces) should be printed as they were received. The shift value will always be on the interval [0, 26].

// keyIn()
