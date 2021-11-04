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
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// **** scrolling functionality *****
const btnScroll = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScroll.addEventListener('click', function (e) {
  const sec1Cordinates = section1.getBoundingClientRect();
  // window.scrollTo(
  //   sec1Cordinates.left + window.pageXOffset,
  //   sec1Cordinates.top + window.pageYOffset
  // );

  window.scrollTo({
    left: sec1Cordinates.left + window.pageXOffset,
    top: sec1Cordinates.top + window.pageYOffset,
    behavior: 'smooth',
  });
});

//*** page navigation *****
// document.querySelectorAll('.nav__link').forEach(function (link) {
//   link.addEventListener('click', function (e) {
//     e.preventDefault();
//     let id = link.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// 1.add event listener to a commun parent element
// 2. Determine what element originated the event
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    let id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// tabbed content
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
tabsContainer.addEventListener('click', function (e) {
  const btnClicked = e.target.closest('.operations__tab');

  // guard clause
  if (!btnClicked) return;

  // remove active classes
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  tabsContent.forEach(tab =>
    tab.classList.remove('operations__content--active')
  );
  // Active tab
  btnClicked.classList.add('operations__tab--active');

  //activate content area
  document
    .querySelector(`.operations__content--${btnClicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// menu fade animation
const handlHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el != link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

const nav = document.querySelector('.nav');
nav.addEventListener('mouseover', handlHover.bind(0.5));

nav.addEventListener('mouseout', handlHover.bind(1));

// implement sticky navigation
// const initCord = section1.getBoundingClientRect();

// window.addEventListener('scroll', function () {
//   if (window.scrollY > initCord.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

// sticky navigation : intersection observer API
// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };
// const obsOptions = {
//   root: null,
//   threshold: 0.1,
// };
// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entrie] = entries;
  // console.log(entrie);
  if (!entrie.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
const headerClass = document.querySelector('.header');
headerObserver.observe(headerClass);

// reveal sections
const allSections = document.querySelectorAll('section');
const revealSection = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  sectionObserver.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

// lazy Loading imgs
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) return;
  // replace src attribute with data-src
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});
imgTargets.forEach(img => {
  imgObserver.observe(img);
});

// sliding images
const slider = function () {
  let curSlide = 0;
  const slides = document.querySelectorAll('.slide');
  const maxSlide = slides.length;
  const slider = document.querySelector('.slider');
  const leftBtn = document.querySelector('.slider__btn--left');
  const rightBtn = document.querySelector('.slider__btn--right');
  const dotcont = document.querySelector('.dots');

  // slider.style.transform = 'scale(0.4)';
  // slider.style.overflow = 'visible';

  const activDots = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));
    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotcont.insertAdjacentHTML(
        'beforeend',
        `<button class='dots__dot' data-slide="${i}"></button>`
      );
    });
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${(i - slide) * 100}%)`)
    );
  };
  const init = function () {
    createDots();
    goToSlide(0);
    activDots(0);
  };
  init();
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
    activDots(curSlide);
  };
  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }

    goToSlide(curSlide);
    activDots(curSlide);
  };

  rightBtn.addEventListener('click', nextSlide);
  leftBtn.addEventListener('click', prevSlide);
  // event listner for keyboard
  document.addEventListener('keydown', function (e) {
    // console.log(e);
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
  });

  // event delegation
  dotcont.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const slide = e.target.dataset.slide;
      goToSlide(slide);
      activDots(slide);
    }
  });
};
slider();
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

// lectures
// *********selecting elements *******

// console.log(document.documentElement);
// console.log(document.body);
// console.log(document.documentElement);

const header = document.querySelector('header');
// ****** creating elements ******
const msg = document.createElement('div');
msg.classList.add('cookie-message');
msg.innerHTML =
  'we use cookies. <button class="btn btn--close-cookie">got it</button>';

// ***** inserting the element created to the dom *******
header.append(msg);

//**** creating element using the insertAdjacentHTML */

// const msg =
//   'we use cookies. <button class="btn btn--close-cookie">got it</button>';
// header.insertAdjacentHTML('afterbegin', msg);

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    msg.remove();
  });

// **** styles attributes and classes *****

//styles

msg.style.backgroundColor = '#37383d';
msg.style.width = '100%';

msg.style.height = Number.parseFloat(getComputedStyle(msg).height) + 30 + 'px';

// attributes

const logo = document.querySelector('.nav__logo');
logo.alt = 'great logo';

// setInterval(() => console.log(window.pageYOffset), 1000);

// ***** type of events and event handlers ****

// const body = document.querySelector('body');
// body.addEventListener('mousemove', function () {
//   console.log('hello');
// });

const h1 = document.querySelector('h1');

// h1.closest('.header').style.backgroundColor = 'red';

// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   e.returnValue = '';
// });
