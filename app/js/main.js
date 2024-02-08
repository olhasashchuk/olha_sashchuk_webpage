(() => {
   const headerBurgerBtn = document.querySelector('.header__box-burger')
   const headerNavigation = document.querySelector('.header__nav')
   const headerCloseBtn = document.querySelector('.header__nav-close')

   headerBurgerBtn.addEventListener ('click', () => {
      headerNavigation.classList.add('active')
   })

   headerCloseBtn.addEventListener ('click', () => {
      headerNavigation.classList.remove('active')
   })
}
)();

function slider (prevButton, nextButton, listElement) {
   const changeSlide = (event) => {
       const ACTIVE_CLASS_NAME = 'current';

       const activeElement = listElement.querySelector(`.${ACTIVE_CLASS_NAME}`);

       if (event.target === nextButton || event.target === prevButton) {

           const isPrevButton = event.target === prevButton;
           const prevOrNextElement = isPrevButton
               ? activeElement.previousElementSibling
               : activeElement.nextElementSibling;

           // change Slide
           if (prevOrNextElement) {
               activeElement.classList.remove(ACTIVE_CLASS_NAME);
               prevOrNextElement.classList.add(ACTIVE_CLASS_NAME);
               prevButton.style.display = 'block';
               nextButton.style.display = 'block';
           }
       }
   }
   nextButton.addEventListener('click', changeSlide)
   prevButton.addEventListener('click', changeSlide)
}

slider (
   document.querySelector('.js--slider__prev'),
   document.querySelector('.js--slider__next'),
   document.querySelector('.js--slider__list'),
)