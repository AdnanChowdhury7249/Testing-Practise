function caesarCipher(string, shift) {
  let result = '';

  for (let i = 0; i < string.length; i++) {
    let charCode = string.charCodeAt(i);


    if (charCode >= 97 && charCode <= 122) {
      let shiftedCode = ((charCode - 97 + shift) % 26) + 97;
      result += String.fromCharCode(shiftedCode)
    }

    else if (charCode >= 65 && charCode <= 90) {
      let shiftedCode = ((charCode - 97 + shift) % 26) + 97;
      result += String.fromCharCode(shiftedCode)
    }
    else {
      result += string[i];
    }
  }

  return result

}


module.exports = caesarCipher;
