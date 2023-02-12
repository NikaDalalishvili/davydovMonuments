document.addEventListener('DOMContentLoaded', function () {

	const tombstoneSlide = new Swiper(".tombstone-slide", {
		centeredSlides: true,
		speed: 500,
		grabCursor: true,
		fade: true,

		slidesPerView: 3,
		spaceBetween: 25,
		slidesPerGroup: 1,
		loop: true,
		loopFillGroupWithBlank: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,

			dynamicBullets: true,
		},
		navigation: {
			nextEl: ".tombstone-slide-navigation-next",
			prevEl: ".tombstone-slide-navigation-prev",
		},

		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			950: {
				slidesPerView: 3,
			}
		},
	});

});