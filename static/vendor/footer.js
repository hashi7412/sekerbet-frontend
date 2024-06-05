var footer_swiper = new Swiper('.menu-list-container_e1b68', {
	slidesPerView: 'auto',
	speed: 1000,
	spaceBetween: 20,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	breakpoints: {
		1280: {}
	}
});
