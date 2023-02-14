// print 3331333

let n = 7;
for (let i = 1; i <= n; i++) {
  let run = " ";
  for (let j = n; j <= 1; j++) {
    run += run + " ";
  }
  for (let k = 1; k <= 1; k++) {
    run += "   " + k;
  }
  if (i % 4 == 0) {
    run = " 3331333";
  }
  console.log(run);
}
