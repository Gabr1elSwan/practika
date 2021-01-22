import gallery from './data.js';

const divRef = document.querySelector('.container');

const imgRef = document.querySelector('.img');

const opton = {
  root: divRef,
  rootMargin: '',
  threshold: 0.5,
};

const changImg = (entries, gallery) => {
  entries.forEach(element => {
    console.log(element);
  });
};

const observer = new IntersectionObserver(changImg, opton);

imgRef.forEach(elem => {
  observer.observe(elem);
});
