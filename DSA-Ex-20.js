// Try this if you are comfortable with linear search.

// int a[] = [13, 11, 13,4, 10, 9, 1];
// int x[] = [11, 13, 4, 17];
// Your program should print
// 11 is found 1 time
// 13 is found 2 times
// 4 is found 1 time
// 17 is NOT found


let a = [13, 11, 13, 4, 10, 9, 1, 17];
let x = [11, 13, 4, 17];

let counter = [];
let c = [];
let d = [];
let e = [];
let f = [];
for (let i = 0; i < a.length; i++) {
  b = a[i];

  if (b === x[0]) {
    c.push("1");
  } else if (b === x[1]) {
    d.push("1");
  } else if (b === x[2]) {
    e.push("1");
  } else if (b === x[3]) {
    f.push("1");
  }
}

if (c.length) {
  console.log(x[0] + " is found " + c.length + " times");
}
if (d.length) {
  console.log(x[1] + " is found " + d.length + " times");
}
if (e.length) {
  console.log(x[2] + " is found " + e.length + " times");
}
if (f.length) {
  console.log(x[3] + " is found " + f.length + " times");
}
