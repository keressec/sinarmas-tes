const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function countLetters(str) {
  const letters = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();

    if (char.match(/[a-z]/)) {
      letters[char] = letters[char] ? letters[char] + 1 : 1;
    }
  }

  return letters;
}

rl.question('Masukkan kalimat: ', (sentence) => {
  const letters = countLetters(sentence);
  let count = 0;

  console.log('Huruf Jumlah');
  console.log('-------------');

  Object.keys(letters).sort().forEach((letter) => {
    console.log(`${letter.padEnd(2)}${letters[letter].toString().padStart(3)}`);
    count += letters[letter];
  });

  console.log(`\nJumlah huruf yang terpakai ${count}`);

  rl.close();
});