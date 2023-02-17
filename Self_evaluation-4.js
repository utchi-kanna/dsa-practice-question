// Given an array of length n and k (k < n) find the maximum sum of k consecutive numbers.
// for eg:
// let a = [4,5, 10, 11, 1];
// let k = 3;
// The maximum is 26.



let h = [4, 5, 10, 11, 1, 23, 11, 12];
let k = 3;

let run = [];

for (let i = 0; i < h.length - (k - 1); i++) {
  incre = 0;
  let match = 0;
  for (let j = i; incre < k; j++) {
    match += h[j];
    incre++;
  }
  run.push(match);
}

// console.log(run);

let det = run[0];

for (let i = 1; i < run.length; i++) {
  if (det < run[i]) {
    det = run[i];
  }
}
console.log(det);
