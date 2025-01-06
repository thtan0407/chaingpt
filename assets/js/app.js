const handleScrambleText = function () {
	if ($(".scramble").length > 0) {
		gsap.registerPlugin(ScrambleTextPlugin);
		gsap.config({trialWarn: false});

		$(".scramble").each(function () {
			let $element = $(this);
			let timeline = gsap.timeline({paused: true});

			timeline.to($element.find(".scrambleText")[0], {
				scrambleText: {
					chars: "021zrotxinsmopsweknm",
					text: "{original}",
					speed: 2,
					delimiter: ""
				},
				duration: 0.8
			});

			$element.on("mouseenter", function () {
				timeline.timeScale(1).play();
			});

			$element.on("mouseleave", function () {
				timeline.timeScale(1.5).reverse();
			});
		});
	}
}

const handleNotification = function () {
	if ($('#notificationBlock').length > 0 && $('#notificationClose').length > 0) {
		$('#notificationClose').click(() => {
			$('#notificationBlock').remove();
		})
	}
}

const handleSwiper = function (elm, obj = {}) {
	return new Swiper(elm, {
		loop: true,
		speed: 1000,
		autoplay: {
			delay: 8000,
			disableOnInteraction: true,
		},
		slidesPerView: 1,
		...obj
	});
}

const handleSliderHero = function () {
	if ($('#sliderHero').length > 0) {
		const elmSwiper = '#sliderHero';
		const objSwiper = {
			speed: 500,
			autoplay: {
				delay: 8000,
				disableOnInteraction: true,
			},
			slidesPerView: 2,
			direction: "vertical",
			allowTouchMove: false,
		}
		handleSwiper(elmSwiper + ' .swiper', objSwiper);
	}

	if ($('#sliderHeroFeature').length > 0) {
		const elmSwiper = '#sliderHeroFeature';
		const objSwiper = {
			speed: 500,
			autoplay: {
				delay: 8000,
				disableOnInteraction: true,
			},
			slidesPerView: 1,
			direction: "vertical",
			allowTouchMove: false,
		}
		handleSwiper(elmSwiper + ' .swiper', objSwiper);
	}
}
const handleSliderUnlimited = function () {
	if ($('#sliderUnlimited').length > 0) {
		const elmSwiper = '#sliderUnlimited';
		const objSwiper = {
			speed: 500,
			autoplay: {
				delay: 3000,
				disableOnInteraction: true,
			},
			slidesPerView: 2.505,
			allowTouchMove: false,
		}
		handleSwiper(elmSwiper + ' .swiper', objSwiper);
	}
}

$(document).ready(function () {
	handleScrambleText();
	handleNotification();
	handleSliderHero();
	handleSliderUnlimited();
});
