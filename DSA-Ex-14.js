// reverse strair case

let n = 4;

for (let i = n; i >= 1; i--) {
  let run = "";
  for (let j = i; j >= 1; j--) {
    run += j + " ";
  }
  console.log(run);
}
