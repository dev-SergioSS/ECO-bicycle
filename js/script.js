//^ menu

let menuBtn = document.querySelector('.tm-header__menu-btn')
let menuContent = document.querySelector('.tm-menu')

const openMenu = () => {
	menuBtn.classList.add('open')
	menuContent.classList.add('open')
	document.querySelector('body').style.overflow = 'hidden'
}
const closeMenu = () => {
	menuBtn.classList.remove('open')
	menuContent.classList.remove('open')
	document.querySelector('body').style.overflow = 'visible'
}

menuBtn.addEventListener('click', () => {
	if (!menuBtn.classList.contains('open')) openMenu()
	else closeMenu()
})

menuContent.onclick = (e) => {
	if (e.target.closest('.tm-menu__link')) closeMenu()
}

//^ bike-card

let buttonsWish = document.querySelectorAll('.tm-bike-card__btn-wish')
buttonsWish.forEach(el => el.addEventListener('click', (e) => {
	e.currentTarget.classList.toggle('active')
}))

//^ set width slider-bikes

let container = document.querySelector('.tm-centered-content')
let sliderBikes = document.querySelector('.tm-bikes__slider')

window.addEventListener('resize', setWidthSliderBikes)
setWidthSliderBikes()

function setWidthSliderBikes() {
	widthWindow = window.innerWidth

	if (widthWindow >= 1240) {

		widthContainer = container.offsetWidth
		widthSlider = sliderBikes.offsetWidth

		let res = (widthWindow - widthContainer) / 2
		sliderBikes.style.marginRight = `-${res}px`
		console.log(widthWindow, widthContainer, widthSlider, res);
	} else {
		sliderBikes.style.marginRight = '-20px'
	}
}

//^ swipers

let sliderPopularBikes = new Swiper('.tm-bikes__slider', {

	speed: 400,
	slidesPerView: 'auto',
	slidesPerGroup: 1,
	spaceBetween: 20,

	navigation: {
		nextEl: '.tm-bikes__slider-btn-next',
		prevEl: '.tm-bikes__slider-btn-prew',
	},

	breakpoints: {
		768: {
			spaceBetween: 40,
		},
	},

	observer: true,
	observeParents: true,
	observeSlideChildren: true,
});

let sliderPhotofromGuest = new Swiper('.tm-from-guests__slider', {

	speed: 700,
	slidesPerView: 'auto',
	slidesPerGroup: 1,
	spaceBetween: 20,
	centeredSlides: true,
	slidesPerView: 1.2,
	loop: true,
	autoplay: true,


	navigation: {
		nextEl: '.tm-from-guests__slider-btn-next',
		prevEl: '.tm-from-guests__slider-btn-prew',
	},

	breakpoints: {
		480: {
			slidesPerView: 1.5,
			spaceBetween: 45,
		},
		768: {
			slidesPerView: 1.4,
			spaceBetween: 100,
		},
	},

	observer: true,
	observeParents: true,
	observeSlideChildren: true,
});

let slidersRunText = document.querySelectorAll('.tm-run-text__slider')

slidersRunText.forEach(slider => new Swiper(slider, {
	loop: true,
	autoplay: {
		delay: 1,
	},
	speed: 5000,
	slidesPerView: 'auto',
	spaceBetween: 10,
	allowTouchMove: false,

	breakpoints: {
		768: {
			spaceBetween: 20,
		},
	},
}))

let sliderRunTextReverse = new Swiper('.tm-run-text__slider-reverse', {
	loop: true,
	autoplay: {
		delay: 0,
		reverseDirection: true,
	},
	speed: 5000,
	slidesPerView: 'auto',
	spaceBetween: 10,
	allowTouchMove: false,

	breakpoints: {
		768: {
			spaceBetween: 20,
		},
	},
});