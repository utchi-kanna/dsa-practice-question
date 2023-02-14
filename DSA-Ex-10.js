// n = 4
//          1
//       1 2 1
//   1 2  3 2 1
// 1 2 3 4 3 2 1
//   1 2  3 2 1
//     1   2 1
//          1

// 1st triangle
//          1
//       1 2 1
//   1 2 3 2 1
let n = 4;
for (let i = 1; i <= n; i++) {
  console.log(
    get_spaces(n - i + 1) +
      get_straight_number_series(i) +
      get_reverse_number_series(i)
  );
}
// 2nd triangle
//   1 2 3 2 1
//     1 2 1
//        1
for (let j = n - 1; j >= 1; j--) {
  console.log(
    increase(n - j) +
      get_straight_number_series(j) +
      get_reverse_number_series(j)
  );
}
//  generate empty spaces _______
function get_spaces(n) {
  let space = "";
  for (let i = 1; i <= n; i++) {
    space += " ";
  }
  return space;
}
// straight number series    1 2 3
function get_straight_number_series(n) {
  let number = "";
  for (let i = 1; i <= n; i++) {
    number += i + "";
  }
  return number;
}
// reverse number series   3 2 1
function get_reverse_number_series(n) {
  let num = "";
  for (let i = n - 1; i >= 1; i--) {
    num += i + "";
  }
  return num;
}
// reverse triangle
//   1 2 3 2 1
//     1 2 1
//        1
// space increse
function increase(n) {
  let str = " ";
  for (let i = n; i >= 1; i--) {
    str += " ";
  }
  return str;
}
