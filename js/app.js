const sliderMain = new Swiper('.slider_main', {
    freeMode: true,
    centeredSlides: true,
    mousewheel: true,
    parallax: true,
    breakpoints: {
        0: {
            slidesPerView: 2.5,
            spaceBetween: 20,
        },
        680: {
            slidesPerView: 3.5,
            spaceBetween: 60,
        }
    }
});

const sliderBg = new Swiper('.slider_bg', {
    centeredSlides: true,
    parallax: true,
    spaceBetween: 60,
    slidesPerView: 3.5
});

//свяжем 2 слайдера
sliderMain.controller.control = sliderBg;

document.querySelectorAll('.slider__item').forEach(function (item) {
    item.addEventListener('click', function (event) {
        item.classList.toggle('opened');
    });
});

//создадим анимацию текста и лого
let desc = document.querySelector('.description');
sliderMain.on('slideChange', e => {
    sliderMain.activeIndex > 0 ? desc.classList.add('hidden') : desc.classList.remove('hidden');
});

