// find the min value in array

let u = [9, 98, 90, 8, 88, 34];
let min = k[0];

for (let i = 1; i <= k.length - 1; i++) {
  if (min > k[i]) {
    min = k[i];
  }
}
console.log(min);
