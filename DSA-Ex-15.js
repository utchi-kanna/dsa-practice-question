// find the max value in array

let k = [9, 98, 90, 8, 88, 34];
let max = k[0];

for (let i = 1; i <= k.length - 1; i++) {
  if (max < k[i]) {
    max = k[i];
  }
}
console.log(max);
