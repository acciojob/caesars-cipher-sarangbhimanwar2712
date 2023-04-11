// Your Script here.

const lookup = {
  'A': 'N','B': 'O','C': 'P','D': 'Q',
  'E': 'R','F': 'S','G': 'T','H': 'U',
  'I': 'V','J': 'W','K': 'X','L': 'Y',
  'M': 'Z','N': 'A','O': 'B','P': 'C',
  'Q': 'D','R': 'E','S': 'F','T': 'G',
  'U': 'H','V': 'I','W': 'J','X': 'K',
  'Y': 'L','Z': 'M', '?': '?', ',': ','
};

function rot13(encodedStr){
   // let decodedArr = []; // Your Result goes here
  // Only change code below this line
// define the alphabet and ROT13 alphabet
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const rot13Alphabet = 'NOPQRSTUVWXYZABCDEFGHIJKLM';

  // convert the input string to an array of characters
  const chars = encodedStr.split('');

  // iterate over each character in the array
  const decodedChars = chars.map(char => {
    // check if the character is alphabetic
    const isAlphabetic = alphabet.includes(char);

    if (isAlphabetic) {
      // get the index of the character in the alphabet
      const index = alphabet.indexOf(char);

      // find the corresponding character in the ROT13 alphabet
      const decodedChar = rot13Alphabet[index];

      return decodedChar;
    } else {
      // pass through non-alphabetic characters
      return char;
    }
  });

  // join the array of characters back into a string
  const decodedStr = decodedChars.join('');

  return decodedStr;
}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(rot13("SERR YBIR? NPPVBWBO"));

module.exports = rot13;
