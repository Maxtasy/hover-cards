const swiper = document.querySelector('.Swiper');
const swiperItems = document.querySelectorAll('.SwiperItem');
const swiperButtonNext = document.querySelector('.SwiperButton--Next');
const swiperButtonPrev = document.querySelector('.SwiperButton--Prev');

let activeIndex = 1;

function setClasses() {
  const previousItem = [...swiperItems].at(activeIndex - 1);
  const nextItem = [...swiperItems].at((activeIndex + 1) % swiperItems.length);
  const activeItem = [...swiperItems].at(activeIndex);

  swiperItems.forEach((swiperItem) => {
    swiperItem.classList.toggle('SwiperItem--Prev', swiperItem === previousItem);
    swiperItem.classList.toggle('SwiperItem--Active', swiperItem === activeItem);
    swiperItem.classList.toggle('SwiperItem--Next', swiperItem === nextItem);
    swiperItem.classList.toggle(
      'SwiperItem--Hidden',
      swiperItem !== previousItem && swiperItem !== activeItem && swiperItem !== nextItem
    );
  });
}

swiperButtonNext.addEventListener('click', () => {
  activeIndex += 1;

  if (activeIndex === swiperItems.length) {
    activeIndex = 0;
  }

  setClasses();
});

swiperButtonPrev.addEventListener('click', () => {
  activeIndex -= 1;

  if (activeIndex < 0) {
    activeIndex = swiperItems.length - 1;
  }

  setClasses();
});
