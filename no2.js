const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

rl.question('Masukkan nilai faktorial: ', (n) => {
  const result = factorial(parseInt(n));

  console.log(`Nilai faktorial dari ${n} adalah ${result}`);

  rl.close();
});