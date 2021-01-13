// Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя),
// surname (фамилия), rate (ставка за день работы), days (количество отработанных дней).
//  Также класс должен иметь метод getSalary(), который будет выводить зарплату работника.
//   Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.

// const worker = new Worker('Иван', 'Иванов', 10, 31);

// console.log(worker.name); //выведет 'Иван'
// console.log(worker.surname); //выведет 'Иванов'
// console.log(worker.rate); //выведет 10
// console.log(worker.days); //выведет 31
// console.log(worker.getSalary()); //выведет 310 - то есть 10*31

// С помощью нашего класса создайте двух рабочих и найдите сумму их зарплат.

// const dimon = {
//   name: 'Dimon',
//   surname: 'Petrov',
//   rate: 500,
//   days: 20,
// };

// const petya = {
//   name: 'petya',
//   surname: 'Petrov',
//   rate: 400,
//   days: 31,
// };

// class Worker {
//   constructor({ name, surname, rate, days }) {
//     this.name = name;
//     this.surname = surname;
//     this.rate = rate;
//     this.days = days;
//   }

//   getSalary() {
//     return this.days * this.rate;
//   }
// }

// const A = new Worker(dimon);

// console.log(A);
// console.log(A.getSalary());

// const B = new Worker(petya);

// console.log(B);
// console.log(B.getSalary());

// const C = A.getSalary() + B.getSalary();
// console.log(C);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(),
//  который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(),
//   который параметром принимает строку, а возвращает эту же строку,
//    сделав ее первую букву заглавной и метод ucWords,
//     который принимает строку и делает заглавной первую букву каждого слова этой строки.

// Наш класс должен работать так:

// const str = new MyString();

// console.log(str.reverse('abcde')); //выведет 'edcba'
// console.log(str.ucFirst('abcde')); //выведет 'Abcde'
// console.log(str.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'

// class MyString {
//   reverse(str) {
//     console.log(str.split('').reverse().join(''));
//   }

//   upFirst(str) {
//     console.log(str[0].toUpperCase() + str.slice(1));
//   }

//   ucWords(str) {
//     let results = [];
//     const strArr = str.split(' ');
//     for (let word of strArr) {
//       results.push(word[0].toUpperCase() + word.slice(1));
//     }
//     console.log(results.join(' '));
//   }
// }

// const a = new MyString();
// a.reverse('abcde');
// a.upFirst('abcde');
// a.ucWords('abcde abcde abcde abcde');

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Реализуйте класс Validator, который будет проверять строки. К примеру,
//  у него будет метод isEmail параметром принимает строку и проверяет,
//   является ли она корректным емейлом или нет. Если является - возвращает true,
//    если не является - то false. Кроме того, класс будет иметь следующие методы:
//     метод isDomain для проверки домена, метод isDate для проверки даты и метод isPhone для проверки телефона:

// var validator = new Validator();

// console.log(validator.isEmail('phphtml@mail.ru'));
// console.log(validator.isDomain('phphtml.net'));
// console.log(validator.isDate('12.05.2020'));
// console.log(validator.isPhone('+375 (29) 817-68-92')); //тут можете формат своей страны

// class Validator {
//   isEmail(str) {
//     str.includes('@') && str.includes('.')
//       ? console.log(true)
//       : console.log(false);
//   }

//   isDomain(str) {
//     str.includes('.net') || str.includes('.com')
//       ? console.log(true)
//       : console.log(false);
//   }

//   isDate(date) {
//     let arr = date.split('.');
//     for (const item of arr) {
//       if (!+item) {
//         return false;
//       }
//     }

//     if (
//       arr.length === 3 &&
//       arr[0].length === 2 &&
//       arr[1].length === 2 &&
//       arr[2].length === 4
//     ) {
//       return true;
//     } else {
//       return false;
//     }
//   }
//     isPhone(phone) {
//       console.log(phone);
//     return phone.match(/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;)
//   }
// }

// const validator = new Validator();
// validator.isEmail('wfwfwfwf@fefef.fefe');
// validator.isDomain('fefe.ru');
// console.log(validator.isDate('12.02.2020'));
// console.log(validator.isPhone('+375 (29) 817-68-92'));

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//   Сеть фастфудов предлагает несколько видов гамбургеров.
//   Основа (булочка) гамбургера может быть большой или маленькой (обязательно):
// 	- маленькая (+30 денег, +50 калорий)
// 	- большая (+50 денег, +100 калорий)
//   Гамбургер может быть с одной из нескольких видов начинок (обязательно):
// 	- сыром (+15 денег, +20 калорий)
// 	- салатом (+20 денег, +5 калорий)
// 	- мясом (+35 денег, +15 калорий)
//   Дополнительно, гамбургер можно:
// 	- посыпать приправой (+10 денег, +0 калорий)
// 	- полить соусом (+15 денег, +5 калорий)
// Напишите скрипт, расчитывающий стоимость и калорийность гамбургера.

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const adam = {
//   isAlive: true,
//   rise: true,
//   breathe: true,
//   name: 'Adam',
// };

// const eva = {
//   isAlive: true,
//   rise: true,
//   breathe: true,
//   name: 'Eva',
// };

// class Creature {
//   constructor(isAlive, breathe, rise, name) {
//     this.rise = rise;
//     this.breathe = breathe;
//     this.isAlive = isAlive;
//     this.name = name;
//   }

//   static imAlive() {
//     console.log('Im Alive');
//   }
// }

// class Man extends Creature {
//   constructor(isAlive, breathe, rise, name, high = 179, strong = 200) {
//     super(isAlive, breathe, rise, name);
//     this.high = high;
//     this.strong = strong;
//   }
// }

// class Woman extends Creature {
//   constructor({ isAlive, breathe, rise, name, iq = 110, weight = 60 }) {
//     super(isAlive, breathe, rise, name);
//     this.iq = iq;
//     this.weight = weight;
//   }
// }

// class FireMan extends Man {
//   constructor(
//     { isAlive, breathe, rise, name, high = 179, strong = 200 },
//     exp,
//     tools,
//   ) {
//     super(isAlive, breathe, rise, name, high, strong);
//     this.exp = exp;
//     this.tools = tools;
//   }
// }

// const anna = new Woman(eva);
// console.log(anna);

// const maxim = new Man(adam);
// console.log(maxim);

// const manar = new FireMan(adam, 200, ['hummer', 'axe']);
// console.log(manar);
