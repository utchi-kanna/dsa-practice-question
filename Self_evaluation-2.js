// For a given positive integer n, it should print every number from 1 to n except x

let n = 10;

let x = 5;

for (let i = 1; i <= n; i++) {
  if (x !== i) {
    console.log(i);
  }
}
