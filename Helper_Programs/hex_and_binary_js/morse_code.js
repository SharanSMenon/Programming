var morseCode = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-",     ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];

var morseObj = {};

for (var i = 97, l = 97 + morseCode.length; i < l; i++) {
  morseObj[String.fromCharCode(i)] = morseCode[i - 97];
}

function text_to_morse(sentence) {
  var output = '';
  for (var i = 0, l = sentence.length; i < l; i++) {
    var letter = sentence[i].toLowerCase();
    if (morseObj[letter]) {
      output += morseObj[letter] + ' ';
    }
  }
  return output;
}

console.log(text_to_morse('Hello world'));