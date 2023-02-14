// strair case
let n = 4;
for (let i = 0; i <= n; i++) {
  let run = "";
  for (let j = 0; j <= n - i; j++) {
    run += " ";
  }
  for (let k = 1; k <= i; k++) {
    run += k - "  ";
  }
  console.log(run);
}
