let change = "I am Iron man. Iron man is young avenger";
let ar = change.split(" ");

let fin = "Iron";

for (let i = 0; i < ar.length; i++) {
  if (fin == ar[i]) {
    ar[i] = "spider";
  }
}

let text = "";

for (let i = 0; i < ar.length; i++) {
  text += ar[i] + " ";
}
console.log(text);
