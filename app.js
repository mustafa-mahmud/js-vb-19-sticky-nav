'use strict';

const home = document.querySelector('.header');
const nav = document.querySelector('nav');
const navHeight = nav.getBoundingClientRect().height;

/* window.addEventListener('scroll', () => {
  const headerHeight = header.getBoundingClientRect().height;

  if (window.scrollY > headerHeight) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
}); */

//create observer
const navObserve = new IntersectionObserver(sticky, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

//add observer to an element
navObserve.observe(home);
console.log(navHeight);

//call back function for observer
function sticky(entries, observe) {
  const entry = entries[0];
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
}
