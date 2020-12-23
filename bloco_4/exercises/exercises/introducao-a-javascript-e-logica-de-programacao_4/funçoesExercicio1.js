function verificaPalindromo(string) {
  for(let i = 0; i < string.length / 2; i += 1) {
    if (string[i] != string[string.length - i - 1]) {
      return false;
    } else {
      return true;
    }
  }
};

console.log(verificaPalindromo('arara'));
console.log(verificaPalindromo('desenvolvimento'));

//https://pt.stackoverflow.com/questions/315456/fun%C3%A7%C3%A3o-para-checar-pal%C3%ADndromo