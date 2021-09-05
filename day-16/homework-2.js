let n = 1000;

let num = 0;
while (n / 2 > 50) {
  n /= 2;
  num += 1;
  console.log(n);
}

console.log(`iteration: ${num}, number: ${n}`);
