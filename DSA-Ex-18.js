// find the x value how many time in the array

let a = [5, 10, 8, 10, 7, 5, 3];

let x = 10;

let counter = [];

for (let i = 0; i < a.length; i++) {
  let b = a[i];
  if (x === b) {
    counter.push(b);
  }
}
if (counter.length === 0) {
  console.log("x is not found in the array");
} else {
  console.log("x is found in the array " + counter.length + " times");
}
