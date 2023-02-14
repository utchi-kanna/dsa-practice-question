// print 22122

let n = 5;
for (let i = 1; i <= n; i++) {
  let run = " ";
  for (let j = n; j <= 1; j++) {
    run += run + " ";
  }
  for (let k = 1; k <= 1; k++) {
    run += "   " + k;
  }
  if (i % 3 == 0) {
    run = "  22122";
  }
  console.log(run);
}
