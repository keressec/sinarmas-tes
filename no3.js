const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Masukkan tahun: ', (year) => {
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    console.log(`Tahun ${year} merupakan tahun kabisat`);
  } else {
    console.log(`Tahun ${year} bukan tahun kabisat`);
  }

  rl.close();
});