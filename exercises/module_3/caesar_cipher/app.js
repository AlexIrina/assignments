// var readline = require('readline-sync')
// var whatImEncrypting = readline
// 	.question('What phrase would you like to encrypt? ')
// 	.toLowerCase()
// var howManyLettersToShift = parseInt(
// 	readline.question('How many letters would you like to shift? ')
// )

// const caesarCipher = (mySecret, numOfLetters) => {
// 	let encryption = ''
// 	const alphabet = 'abcdefghijklmnopqrstuvwxyz'
// 	for (let i = 0; i < mySecret.length; i++) {
// 		let index = alphabet.indexOf(mySecret[i])
// 		if (index !== -1) {
// 			let newIndex = index + numOfLetters
// 			let newCharacter = alphabet[newIndex]
// 			encryption += newCharacter
// 		}
// 	}
// 	return encryption
// }
// caesarCipher(whatImEncrypting, howManyLettersToShift)

// Plain js version
const caesarCipher = (whatImEncrypting, numOfLetters) => {
	let encryption = ''
	const alphabet = 'abcdefghijklmnopqrstuvwxyz'
	for (let i = 0; i < whatImEncrypting.length; i++) {
		let index = alphabet.indexOf(whatImEncrypting[i])
		// console.log(index) //?
		if (index !== -1) {
			let newIndex = index + numOfLetters //?
			let newCharacter = alphabet[newIndex] //?
			encryption += newCharacter
		}
	}
	return encryption //?
}
caesarCipher('V School is awesome!', 11) //?
