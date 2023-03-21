// 1.find the value palindrome or not

let pal = "level";

let str = pal.split("");

let rev = str.reverse();

let jo = rev.join("");

if (jo == pal) {
  console.log("this is palindrome");
} else {
  console.log("this is not palindrome");
}

// 2.find the value palindrome or not

let pal1 = "level";

let ay = [];

for (let i = 0; i < pal1.length; i++) {
  ay.push(pal1[i]);
}

let fin = "";
for (let i = ay.length - 1; i >= 0; i--) {
  fin += ay[i];
}

if (fin === pal1) {
  console.log("this is palindrome");
} else {
  console.log("this is not palindrome");
}
