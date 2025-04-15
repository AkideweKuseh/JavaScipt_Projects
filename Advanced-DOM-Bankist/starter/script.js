'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => {
  btn.addEventListener('click', openModal);
});
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Selecting elements
// new selectors
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

// console.log(document.getElementsByClassName('btn'));

const header = document.querySelector('.header');

// creating and inserting elements
// .insertAdjacentHTML to insert HTML elements
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent =
//   'We use cookies for improved functionality and analytics.';
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

//inserting the message element
header.append(message);

// header.prepend(message); // prepend to the beginning of the header
// header.before(message); // before the header
// header.after(message); // after the header

// deleting elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });
// OR
// message.parentElement.removeChild(message); // remove the message element
// OR
// header.removeChild(message); // remove the message element

//styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';
message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 30 + 'px'; // get the height of the message element
// document.documentElement.style.setProperty('--color-primary', 'orangered'); // set the primary color to orangered

// // attributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt); // get the alt attribute of the logo
// console.log(logo.src); // get the src attribute of the logo

// console.log(logo.getAttribute('src')); // get the src attribute of the logo
// console.log(logo.getAttribute('alt')); // get the alt attribute of the logo
// console.log(logo.getAttribute('class')); // get the class attribute of the logo
// console.log(logo.getAttribute('id')); // get the id attribute of the logo

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function () {
  section1.scrollIntoView({ behavior: 'smooth' }); // smooth scrolling to the section1 element

  // const s1coords = section1.getBoundingClientRect(); // get the position of the section1 element
  // console.log(s1coords); // get the position of the section1 element
  // console.log('Current scroll (X/Y)', window.scrollX, window.scrollY); // get the current scroll position

  // scrolling to the section1 element
  // window.scrollTo(
  //   s1coords.left + window.scrollX,
  //   s1coords.top + window.scrollY
  // );

  // OR
});

// Pagination

// inefficient way
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault(); // prevent the default behavior of the link
//     const id = this.getAttribute('href'); // get the href attribute of the link
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' }); // smooth scrolling to the section
//   });
// });

// efficient way (event delegation)
// algorithm
// 1. add event listener to the parent element
// 2. use event.target to get the element that triggered the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault(); // prevent the default behavior of the link
  console.log(e.target);
  // matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href'); // get the href attribute of the link
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' }); // smooth scrolling to the section
  }
});
// ///////////////////////////////////
//////////////////////////////////

// console.log(section1.getBoundingClientRect()); // get the position of the section1 element
// console.log(section1.getBoundingClientRect().height); // get the height of the section1 element
// console.log(section1.getBoundingClientRect().width); // get the width of the section1 element
// console.log(section1.getBoundingClientRect().top); // get the top position of the section1 element
// console.log(section1.getBoundingClientRect().left); // get the left position of the section1 element
// console.log(section1.getBoundingClientRect().right); // get the right position of the section1 element
// console.log(section1.getBoundingClientRect().bottom); // get the bottom position of the section1 element
// console.log(section1.getBoundingClientRect().x); // get the x position of the section1 element
// console.log(section1.getBoundingClientRect().y); // get the y position of the section1 element
// console.log(section1.getBoundingClientRect().width); // get the width of the section1 element
// console.log(section1.getBoundingClientRect().height); // get the height of the section1 element
// console.log(section1.getBoundingClientRect().top); // get the top position of the section1 element
// console.log(section1.getBoundingClientRect().left); // get the left position of the section1 element
// console.log(section1.getBoundingClientRect().right); // get the right position of the section1 element
// console.log(section1.getBoundingClientRect().bottom); // get the bottom position of the section1 element

// event capturing and bubbling

// rgb(10, 95, 225);

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1)) + min;
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
// // console.log(randomColor());

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('e.target', e.target); // target the element that triggered the event
//   console.log('e.currentTarget', e.currentTarget); // target the element that is listening to the event
//   console.log(e.currentTarget === this); // true
//   // stop propagation of the event
//   e.stopPropagation(); // stop the event from bubbling up to the parent elements
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('e.target', e.target); // target the element that triggered the event
//   console.log('e.currentTarget', e.currentTarget); // target the element that is listening to the event
// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('e.target', e.target); // target the element that triggered the event
//   console.log('e.currentTarget', e.currentTarget); // target the element that is listening to the event
// });

// document.querySelector('body').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
// });
