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

const handleSliderArticles = function () {
	if ($('.sliderArticles').length > 0) {
		$('.sliderArticles').each(function () {
			let elmID = $(this).attr('id');

			const elmSwiper = '#' + elmID;
			const objSwiper = {
				loop: false,
				speed: 500,
				autoplay: false,
				slidesPerView: 2,
				allowTouchMove: false,
				navigation: {
					nextEl: elmSwiper + " .sliderArticlesNext",
					prevEl: elmSwiper + " .sliderArticlesPrev",
				},
			}
			handleSwiper(elmSwiper + ' .swiper', objSwiper);
		});
	}
}

const handleSliderTeams = function () {
	if ($('.sliderTeams').length > 0) {
		$('.sliderTeams').each(function () {
			let elmID = $(this).attr('id');

			const elmSwiper = '#' + elmID;
			const objSwiper = {
				loop: false,
				speed: 500,
				autoplay: false,
				slidesPerView: 1,
				allowTouchMove: false,
				navigation: {
					nextEl: elmSwiper + " .sliderTeamsNext",
					prevEl: elmSwiper + " .sliderTeamsPrev",
				},
			}
			handleSwiper(elmSwiper + ' .swiper', objSwiper);
		});
	}
}

const handleSliderPartner = function () {
	if ($('#sliderPartner').length > 0) {
		const elmSwiper = '#sliderPartner';
		const objSwiper = {
			loop: false,
			speed: 500,
			autoplay: false,
			slidesPerView: 1,
			allowTouchMove: false,
			navigation: {
				nextEl: elmSwiper + " .sliderPartnerNext",
				prevEl: elmSwiper + " .sliderPartnerPrev",
			},
		}
		handleSwiper(elmSwiper + ' .swiper', objSwiper);
	}
}

const handleSliderRoadmap = function () {
	if ($('#sliderRoadmap').length > 0) {
		const elmSwiper = '#sliderRoadmap';
		const objSwiper = {
			loop: false,
			speed: 500,
			autoplay: false,
			slidesPerView: 1,
			allowTouchMove: false,
			navigation: {
				nextEl: elmSwiper + " .sliderRoadmapNext",
				prevEl: elmSwiper + " .sliderRoadmapPrev",
			},
		}
		handleSwiper(elmSwiper + ' .swiper', objSwiper);
	}
}

const handleImportEmbedYoutube = function () {
	if ($('.handleYoutube').length) {
		$('.handleYoutube').click(function () {
			let youtubeFrame = $(this),
				embedYoutubeID = youtubeFrame.attr('data-embed'),
				embedFrame = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${embedYoutubeID}?rel=0&showinfo=0&autoplay=1" frameborder="0" allowfullscreen></iframe>`;

			youtubeFrame.addClass('is-video');
			youtubeFrame.html(embedFrame)
			youtubeFrame.find('img').remove();
		})
	}
}

const handleCopyValue = function () {
	if ($('.handleCopyButton').length) {
		$('.handleCopyButton').on('click', function () {
			const buttonCopy = $(this);
			const valueToCopy = buttonCopy.data('value');

			const textAreaTemp = $('<textarea>')
				.css({
					position: 'absolute',
					left: '-99999px'
				})
				.attr('id', 'textareaCopy')
				.appendTo('body');

			textAreaTemp.val(valueToCopy).select();
			document.execCommand('copy');

			textAreaTemp.remove();

			buttonCopy.closest('.handleCopy').addClass('copied');
			buttonCopy.find('img').attr('src', '../assets/images/icon-copied.svg');

			setTimeout(() => {
				buttonCopy.closest('.handleCopy').removeClass('copied');
				buttonCopy.find('img').attr('src', '../assets/images/icon-copy.png');
			}, 1000)
		});
	}
}
const handleEffectEyeMouse = function () {
	const eye = document.querySelector('#handleEffectEyeMouse');

	// Create a max value for the translation in the x and y directions
	const maxTrans = 290;

	// Create a max distance for the mouse position to the center of the element (the viewport dimensions wouldn't be a bad choice).
	let maxXDist, maxYDist;

	let centerX, centerY;

	function resize() {
		maxXDist = innerWidth / 2;
		maxYDist = innerHeight / 2;

		const eyeArea = eye.getBoundingClientRect();
		const R = eyeArea.width / 2;
		centerX = eyeArea.left + R;
		centerY = eyeArea.top + R;
	}

	// Debounce function
	function debounce(func, wait) {
		let timeout;
		return function (...args) {
			clearTimeout(timeout);
			timeout = setTimeout(() => func.apply(this, args), wait);
		};
	}

	// The update function wrapped with debounce
	function updateTrans(e) {
		const eyeArea = eye.getBoundingClientRect();
		const faceArea = eye.parentElement.getBoundingClientRect();

		// Tính khoảng cách từ chuột đến tâm mắt
		const x = e.clientX - centerX;
		const y = e.clientY - centerY;

		// Tính khoảng cách tối đa mắt được phép di chuyển trong khuôn mặt
		const maxMoveX = (faceArea.width - eyeArea.width) / 2;
		const maxMoveY = (faceArea.height - eyeArea.height) / 2;

		// Đưa vị trí chuột về tỷ lệ phần trăm và nhân với khoảng di chuyển tối đa
		let scaledX = (x / maxXDist) * maxTrans;
		let scaledY = (y / maxYDist) * maxTrans;

		// Giới hạn chuyển động trong khuôn mặt
		scaledX = Math.min(Math.max(scaledX, -maxMoveX), maxMoveX);
		scaledY = Math.min(Math.max(scaledY, -maxMoveY), maxMoveY);

		// Áp dụng vị trí mới
		gsap.to(eye, {x: scaledX, y: scaledY, duration: 0.2, overwrite: 'auto'});
	}

	// Wrap the updateTrans function with debounce
	const debouncedUpdateTrans = debounce(updateTrans, 16); // 16ms for 60fps

	window.addEventListener('resize', resize);
	resize();

	document.querySelector('body').addEventListener('mousemove', debouncedUpdateTrans);
}


$(document).ready(function () {
	handleScrambleText();
	handleNotification();
	handleSliderHero();
	handleSliderUnlimited();
	handleSliderTeams();
	handleSliderArticles();
	handleSliderPartner();
	handleSliderRoadmap();
	handleCopyValue();
	handleImportEmbedYoutube();
	handleEffectEyeMouse();
});
