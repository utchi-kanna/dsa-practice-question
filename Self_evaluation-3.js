// Given an array, print the sum of all even numbers in the array

let g = [4, 3, 17, 10, 11];

let sum = 0;

for (let i = 0; i < g.length; i++) {
  let f = g[i];
  if (f % 2 == 0) {
    sum += f;
  }
}
console.log(sum);
