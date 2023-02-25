const swiper = new Swiper('.menu__swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    centerMode: true,
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    sliderPerGruop: 1,
    
    breakpoints: {
        320: {
            slidesPerView: 1,
            pagination: {
                
            }
        },
        480: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        }
    },
});

let humburger = document.querySelector('.humburger');
let humburgerMenu = document.querySelector('.humburger__menu');


humburger.addEventListener('click', function(){
	humburger.classList.toggle('active');
	humburgerMenu.classList.toggle('active');
});
