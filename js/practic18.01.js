// const h1 = document.querySelector('h1');
// console.dir(h1);
// h1.textContent = 'Hellow ';
// console.log(h1.textContent);
// const unputName = prompt('Vvedite im9!');

// h1.textContent += unputName;

// const arr = [
//   'Andrey Shelukhin ',
//   'Dmytro Bazhenov',
//   'Vova Chelidze',
//   'Dmitry Grinchenko',
//   'Stanislav Karasyk',
//   'Maxim Kazachuk',
//   'Ivan Khailo',
//   'Misha Khmara',
//   'Vitaliy Kornienko',
//   'Bogdan Lytvyn',
//   'Dmytro Orgish',
//   'Liudmila Popescu',
//   'Pavel Sakun',
//   'Evgeny Serebrennikov',
//   'Roman Skliarenko',
//   'Kateryna Tashkin',
//   'Maria Trofimova',
//   'Maksym Tuhanov',
//   'Daria Viter',
//   'Mykhailo Yefymovych',
//   'Tetiana Ziatikova',
// ];

// const arr2 = [1, 2, 3, 4, 5, 5, 6, 7];

// const groupList = document.querySelector('.group-list');
// console.log(groupList);

// const createList = (ul, arr) => {
//   arr.forEach(element => {
//     let elem = document.createElement('li');
//     ul.append(elem);
//     elem.textContent = element;
//   });
// };

// createList(groupList, arr);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// https://picsum.photos/id/237/200/300

// const img = document.createElement('img');
// const body = document.querySelector('body');
// body.append(img);
// img.src = `https://picsum.photos/id/237/200/300`;
// img.setAttribute('alt', 'Little dogs');
// console.log(body);

// for (let i = 0; i < 3; i += 1) {
//   const number = Math.round(Math.random() * 100);
//   body.insertAdjacentHTML(
//     'afterbegin',
//     `<img src='https://picsum.photos/id/${number + i}/200/300' alt='puctures'>`,
//   );
// }
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const div = document.createElement('div');
const body = document.body;
console.log(document.body);
body.append(div);
div.style.backgroundColor = 'red';
div.style.width = '200px';
div.style.height = '200px';
div.style.margin = '0 auto';
div.classList.add('square');
console.log(div.style);

const div1 = document.createElement('div');
div.append(div1);
div1.classList.add('circle');
div1.classList.replace('circle', 'circle2');
