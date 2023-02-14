// Given a name find it in the array of students

let students = [
  {
    name: "Kishore",
    age: 19,
    stipend: 1000,
    marks: { maths: 50, physics: 79, chemistry: 80 },
  },
  {
    name: "Razzak",
    age: 18,
    stipend: 10000,
    marks: { maths: 80, physics: 75, chemistry: 70 },
  },
  {
    name: "Ajmal",
    age: 18,
    stipend: 10000,
    marks: { maths: 35, physics: 45, chemistry: 50 },
  },
  {
    name: "Aishwarya",
    age: 21,
    stipend: 10000,
    marks: { maths: 65, physics: 80, chemistry: 85 },
  },
];

let n = "kanna";

let match = false;

for (let i = 0; i < students.length; i++) {
  if (students[i].name === n) {
    match = true;
    break;
  }
}

if (match == true) {
  console.log(n + " is found in the array");
} else {
  console.log(n + " is not found in the array");
}
