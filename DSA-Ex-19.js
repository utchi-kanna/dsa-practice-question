//  find x is prime number or not

let p = 12;
let x = 0;

for (let i = 2; i <= p; i++) {
  if (p % i == 0) {
    x = x + 1;
  }
}

if (x === 1) {
  console.log(p + " is a prime number");
} else {
  console.log(p + " is not a prime number");
}
