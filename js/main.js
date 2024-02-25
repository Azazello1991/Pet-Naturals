
const element = document.getElementById('phone');
const maskOptions = {
   mask: '+{38}(\\000)000-00-00',
   lazy: false
}
const mask = new IMask(element, maskOptions);

// ----------------------------Burger-menu----------------------------------- //
document.addEventListener('DOMContentLoaded', () => {
   const burger = document.querySelector('.burger');

   burger.addEventListener('click', () => {
      burger.classList.toggle('burger--active');
   });
});


// ---------------------------- Mobile Menu ---------------------------------- //
const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');
const bodyLock = document.querySelector('body');

document.addEventListener('DOMContentLoaded', () => {
   burger.addEventListener('click', () => {
      mobileMenu.classList.toggle('mobile-menu--active');

      if (mobileMenu.classList.contains('mobile-menu--active')) {
         burger.classList.add('burger--active');
         bodyLock.classList.add('lock');
      }

      else {
         burger.classList.remove('burger--active');
         bodyLock.classList.remove('lock');
      }
   });
});

// ------------------------- event click ---------------------------- //
document.addEventListener('click', (e) => {
   const target = e.target;
   if (target.classList.contains('mobile-menu__btn')) {
      burger.classList.remove('burger--active');
      bodyLock.classList.remove('lock');
      mobileMenu.classList.remove('mobile-menu--active');
   }
});

// -------------------------- Timer -------------------------------- //

const h = document.querySelector('.timer__h');
const m = document.querySelector('.timer__m');
const s = document.querySelector('.timer__s');
let sum = ((+h.textContent) * 3600) + (+m.textContent * 60) + (+s.textContent);

function timer() {
   sum = sum - 1
   const h2 = Math.trunc(sum / 3600);
   h.textContent = h2;

   const m2 = Math.trunc((sum - h2 * 3600) / 60);
   if (m2 < 10) {
      m.textContent = `0${m2}`;
   } else {
      m.textContent = m2;
   }

   const s2 = Math.trunc((sum - h2 * 3600 - m2 * 60));
   if (s2 < 10) {
      s.textContent = `0${s2}`;
   } else {
      s.textContent = s2;
   }

   if (sum < 0) {
      setInterval(timer, 1000);
   }
}

setInterval(timer, 1000);



// ------------ Date ------------------------- //
let date = new Date();
const dateDay = document.querySelector('.date__day');
const dateMonth = document.querySelector('.date__month');
const dateYear = document.querySelector('.date__year');

if (date.getDate() < 10) {
   dateDay.textContent = `0${date.getDate()}`
} else {
   dateDay.textContent = date.getDate();
};

if (date.getMonth() < 10) {
   dateMonth.textContent = `0${date.getMonth() + 1}`
} else {
   dateMonth.textContent = date.getMonth();
};

dateYear.textContent = date.getFullYear();