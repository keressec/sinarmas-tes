const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str.toLowerCase() === reversed.toLowerCase();
}

rl.question('Masukkan kata: ', (word) => {
  if (isPalindrome(word)) {
    console.log(`Kata "${word}" merupakan palindrome`);
  } else {
    console.log(`Kata "${word}" bukan merupakan palindrome`);
  }

  rl.close();
});