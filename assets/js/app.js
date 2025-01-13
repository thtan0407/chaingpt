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
				nextEl: elmSwiper + " .sliderTeamsNext",
				prevEl: elmSwiper + " .sliderTeamsPrev",
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

$(document).ready(function () {
	handleScrambleText();
	handleNotification();
	handleSliderHero();
	handleSliderUnlimited();
	handleSliderTeams();
	handleSliderArticles();
	handleSliderPartner();
	handleCopyValue();
	handleImportEmbedYoutube();
});
