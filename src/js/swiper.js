// import Swiper from 'swiper';
// import 'swiper/swiper.min.css';
// import 'swiper/swiper-bundle.min.css';
// import 'swiper/css/navigation';
import { funds } from './funds';

const list_support = document.querySelector('.support-wrapper');
// const disable = document.querySelector('.swiper-button-disabled');
// const nextButton = document.querySelector('.swiper-button-next');
// const nextIcon = document.querySelector('.swiper_icon-next');
// const prevButton = document.querySelector('.swiper_icon-prev');

function createFondMarkup(arr) {
  const markup = arr
    .map(
      ({ number, img, url, title }) =>
        `<div class="swiper-slide support-cont-slide"><a class="link support_funds_element" href="${url}" target="_blank" rel="noopener noreferrer">
    <span class="support_funds_number">${number}</span>
    <img class="support_funds_image" src="${img}" alt="${title}">
</a></div>`
    )
    .join('');
  return markup;
}

list_support.insertAdjacentHTML('beforeend', createFondMarkup(funds));

new Swiper('.support-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  spaceBetween: 20,
  // loop: true,
  freeMode: true,
  direction: 'vertical',
  breakpoints: {
    320: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 6,
    },
  },
  keyboard: {
    enabled: true,
  },
});

// function disableButton() {
//   if (nextButton.classList.contains('swiper-button-disabled')) {
//     console.log('test');
//     // nextIcon.style.disabled === true;
//   }
// }
// disableButton(nextButton);