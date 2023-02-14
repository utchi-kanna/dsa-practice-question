// find the x value in the array

let g = [5, 80, 4, 8, 12, 3, 1];

let x = 10;

let match = false;

for (let i = 0; i < g.length; i++) {
  if (x === g[i]) {
    console.log(x + " is found in the array");
    match = true;
  }
}

if (match === false) {
  console.log(x + " is not found in the array");
}
