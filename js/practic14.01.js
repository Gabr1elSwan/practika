// 1) Написати ф-ю яка приймає рік
// 2) Повертає століття.

// const getCentury = function (year) {
//   const res = parseInt(year / 100) + 1;
//   console.log(res);
// };

// getCentury(2000);

// @!@@@@@@@@!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// II)
// 1) Запитуємо в користувача роки до тих пір поки він не натисне Cancel
// 2) Всі роки які вводить користувач записується в масив years
//  3) Коли зупинився цикл потрібно перебрати масив years
// і вивести в консоль запис
// 1952 рік - 20 століття
// 1440 рік - 15 століття

// const century = function (year) {
//   return Math.floor(year / 100) + 1;
// };

// let userInput;
// let years = [];

// while (userInput !== null) {
//   userInput = prompt('Insert year');
//   userInput ? years.push(userInput) : '';
// }

// years.forEach(year => {
//   console.log(`Year ${year} , Century ${century(year)}`);
// });

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Высчитывает высокосный год

// const isLeap = year => year % 4 === 0;

// console.log(isLeap('1957'));
// console.log(isLeap('2000'));

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Напишите ф-ю которая принимает строку и возвращает объект с  количеством  букв в строке
// console.log(countLetter('w3school.com')) // 3

// const countLetter = str => {
//   let obj = {};
//   let splitted = str.split('');
//   splitted.forEach(el => (obj[el] = 0));
//   console.log(splitted);

//   splitted.forEach(el => (obj[el] ? = (obj[el]= + (obj[el] + 1) : console.log(el);));
//   return obj;
// };

// console.log(countLetter('w3school.com'));
