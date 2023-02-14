// print
// 1 
// 2 
// 3
// 4
// 5
// 4
// 3
// 2
// 1

let n = 9;

let run = "";

for (let i = 1; i <= n; i++) {
  let run = i + " ";
  if (i - 5 == 1) {
    console.log("4");
  } else if (i - 6 == 1) {
    console.log("3");
  } else if (i - 7 == 1) {
    console.log("2");
  } else if (i - 8 == 1) {
    console.log("1");
  } else {
    console.log(run);
  }
}
