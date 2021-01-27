// import gallery from './data.js';
// const divRef = document.querySelector('.container');
// const imgRef = document.querySelectorAll('.img');
// const options = {
//   root: divRef,
//   rootMargin: '50px',
//   threshold: 0.1,
// };
// const changImg = entries => {
//   imgRef.forEach((elem, i) => {
//     elem.dataset.url = gallery[i].src;
//   });
//   entries.forEach(element => {
//     element.isIntersecting
//       ? (element.target.src = element.target.dataset.url)
//       : '';
//   });
// };
// const observer = new IntersectionObserver(changImg, options);
// imgRef.forEach(elem => {
//   observer.observe(elem);
// });
