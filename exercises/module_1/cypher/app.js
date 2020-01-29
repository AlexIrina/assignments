const readLine = require('readline-sync');
const input = readLine
  .question(`What phrase do you want to encrypt? `)
  .toLowerCase();
const shift = parseInt(
  readLine.question(`How many letters would you like to shift? `)
);

function cypher(phrase, offset) {
  let encryption = '';
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  for (let i = 0; i < phrase.length; i++) {
    const index = alphabet.indexOf(phrase[i]);

    if (index !== -1) {
      // console.log(offset);
      let newIndex = index + offset;

      const newCharacter = alphabet[newIndex];
      // console.log(newCharacter);
      encryption += newCharacter;
    }
  }
  return encryption;
}

console.log(cypher(input, shift));
