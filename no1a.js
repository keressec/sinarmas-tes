const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Masukkan jumlah detik: ', (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  console.log(`Jumlah Jam: ${hours}`);
  console.log(`Jumlah Menit: ${minutes}`);
  console.log(`Jumlah Detik: ${remainingSeconds}`);

  rl.close();
});