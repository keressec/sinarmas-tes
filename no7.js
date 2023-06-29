const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function removePunctuation(sentence) {
  return sentence.replace(/[^\w\s]|_/g, '').replace(/\s+/g, '');
}

rl.question('Masukkan kalimat: ', (sentence) => {
  const result = removePunctuation(sentence);

  console.log(`Hasil: ${result}`);

  rl.close();
});