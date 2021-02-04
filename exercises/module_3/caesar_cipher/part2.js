const caesarCipher = str => {
	// once the letter is moved 13 places it gets added here
	let finalResult = ''
	//shift 13 places to the right i need to get N.... if 'A' return 'N'
	// let alphabet = 'abcdefghijklmnopqrstuvwxyz'
	// loop through the string
	for (let i = 0; i < str.length; i++) {
		// charCodeAt() returns an ascii code of a letter
		let asciiNum = str[i].charCodeAt()
		// ascii code of capital 'A' is 65 ....'Z' is 90
		// fromCharCodeAt takes the ascii and give you a letter
		if (asciiNum >= 65 && asciiNum <= 77) {
			finalResult += String.fromCharCode(asciiNum + 13)
			// if given 'S' return 13 places to the left
			// if 'N' return 'A'
		} else if (asciiNum >= 78 && asciiNum <= 90) {
			finalResult += String.fromCharCode(asciiNum - 13)
		} else {
			// if code is not between 65 and 90....the spaces
			finalResult += str[i]
		}
	}
	return finalResult //?
}

caesarCipher('V SCHOOL IS AWESOME!') //?
