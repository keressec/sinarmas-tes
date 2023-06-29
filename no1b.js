const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Masukkan jumlah jam: ', (hours) => {
  rl.question('Masukkan jumlah menit: ', (minutes) => {
    rl.question('Masukkan jumlah detik: ', (seconds) => {
      const totalSeconds = (hours * 3600) + (minutes * 60) + parseInt(seconds);

      console.log(`Jumlah detik dari masukkan di atas adalah: ${totalSeconds}`);

      rl.close();
    });
  });
});