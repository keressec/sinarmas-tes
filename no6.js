const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function generatePascalTriangle(depth) {
  const triangle = [];

  for (let i = 0; i < depth; i++) {
    const row = [];

    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        row.push(1);
      } else {
        row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
      }
    }

    triangle.push(row);
  }

  return triangle;
}

rl.question('Masukkan kedalaman level: ', (depth) => {
  const triangle = generatePascalTriangle(depth);

  const maxDigits = triangle[triangle.length - 1][Math.floor(triangle.length / 2)].toString().length + 1;

  for (let i = 0; i < triangle.length; i++) {
    const row = triangle[i];

    const indent = ' '.repeat((depth - i - 1) * maxDigits);
    const padding = ' '.repeat(maxDigits / 2);

    const output = row.map((num) => padding + num.toString() + padding).join(' '.repeat(maxDigits));

    console.log(`${indent}${output}`);
  }

  rl.close();
});