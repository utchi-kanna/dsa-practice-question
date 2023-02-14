// print M type

let n = 4;
for (i = 1; i <= n - 1; i++) {
  console.log(
    left_number(i) + spaces(n - i) + spaces(n - (i + 1)) + right_number(i)
  );
}
console.log(last_left(n) + last_right(n));

function left_number(n) {
  let run = "";
  for (let i = 1; i <= n; i++) {
    run += i + " ";
  }
  return run;
}
function spaces(n) {
  let run = "";
  for (let i = 1; i <= n; i++) {
    run += "  ";
  }
  return run;
}
function right_number(n) {
  let run = "";
  for (let i = n; i >= 1; i--) {
    run += i + " ";
  }
}
function last_left(n) {
  let run = "";
  for (let i = 1; i <= n; i++) {
    run += i + " ";
  }
  return run;
}
function last_right(n) {
  let run = "";
  for (let i = 1; i <= n - 1; i++) {
    run = i + " " + run;
  }
  return run;
}
