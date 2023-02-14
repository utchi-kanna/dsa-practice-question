// Count the number of students whose total average is more than 70.

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

const average = function (student) {
  let j = 0;
  for (let i = 0; i < student.length; i++) {
    let average =
      (student[i].marks.maths +
        student[i].marks.physics +
        student[i].marks.chemistry) /
      3;
    if (average > 70) {
      //   console.log(arrOfObj[i].name, average);
      j++;
    }
  }
  return j;
};
console.log(
  average([
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
  ])
);
