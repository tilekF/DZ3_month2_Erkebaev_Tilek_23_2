// ------------------TASK 1-----------------
let num = 9;
while (num) {
    console.log(num);
    num--;
}
//----------------Task 2----------------
// const num1 = parseInt(prompt("Введите число:"));
// let sum = 0;
// let numbers = '';

// for (let i = 1; i <= num1; i++) {
//   sum += i;
//   numbers += i + (i === num1 ? '' : ' + ');
// }

// alert(`${numbers} = ${sum}`);

//------------------Task 3--------------
let sum2 = 0;
let num2 = 1;

while (num <= 99) {
  if (num % 2 !== 0) {
    sum2 += num2;
  }
  num++;
}

console.log(sum2);

//-----------------Task 4-------------
let daysOfWeek = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];

for (let i = 0; i < daysOfWeek.length; i++) {
  let day = daysOfWeek[i];
  if (day === "Суббота" || day === "Воскресенье") {
    console.log(day.toUpperCase());
  } else {
    console.log(day.toLowerCase());
  }
}