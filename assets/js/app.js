let windowWidth = $('body').width();
let handleApplyCollapse = function ($parent, $firstItem = false, $callFunction = false) {
	let $childUl = $parent.find('> li > [data-navigation=sub]');
	if ($childUl.length === 0) {
		return;
	}

	if ($callFunction) {
		$parent.find('> li a').each(function () {
			$(this).attr('data-href', $(this).attr('href'))
		});
	}

	let $parentID = '';

	if ($firstItem) {
		$parentID = 'menu-' + Math.random().toString(36).substring(7);
		$parent.attr('id', $parentID);
	}

	if (windowWidth <= 991) {
		const heightCalc = $('#header').height() + $('#sectionNotification').height();

		$('#headerNavigation').css('--height', `calc(100vh  - ${heightCalc}px`);

		let $objParentAttr = {};
		let $objChildrenAttr = {
			'data-bs-parent': '#' + $parent.attr('id')
		}

		if ($firstItem) {
			$objParentAttr = {
				'data-bs-parent': '#' + $parentID
			}

			$objChildrenAttr = {};
		}

		$childUl.each(function () {
			let $parentUl = $(this).closest('[data-navigation=sub]');
			let $parentListItem = $(this).closest('li');
			let $parentListItemAnchor = $parentListItem.children('button');

			let $parentUlID = 'menu-' + Math.random().toString(36).substring(7);

			if (!$parentUl.hasClass('collapse')) {
				$parentUl.addClass('collapse').attr({
					'id': 'collapse-' + $parentUlID, ...$objParentAttr, ...$objChildrenAttr
				});

				$parentListItemAnchor.attr({
					'data-bs-toggle': 'collapse',
					'data-bs-target': '#' + $parentUl.attr('id'),
					'aria-expanded': 'false',
				})

				handleApplyCollapse($parentUl, false);

				$parentUl.on('show.bs.collapse', function () {
					$parentListItem.children('button').attr('aria-expanded', true);
					$parent.find('.collapse.show').not($parentUl).collapse('hide').each(function () {
						$(this).siblings('li').children('button').attr('aria-expanded', false);
					});
				}).on('hide.bs.collapse', function () {
					$parentListItem.children('button').attr('aria-expanded', false);
				});
			}
		});
	} else {
		$('#headerNavigation').removeAttr('style');

		$childUl.each(function () {
			let $parentUl = $(this).closest('.collapse');

			$parentUl.removeClass('collapse').removeAttr('data-bs-parent id');

			handleApplyCollapse($parentUl);
		});
	}
}

let handleCallMenu = function () {
	const $body = $('body');
	const handleBody = function ($toggle = false) {
		if ($body.hasClass('navigation-is-open')) {
			$body.removeClass('navigation-is-open');

			$('#headerNavigation [data-navigation=sub]').collapse('hide');
		} else {
			if ($toggle) {
				$body.addClass('navigation-is-open')
			}
		}
	}

	if (windowWidth <= 991) {
		const $hamburger = $('#callNavigation');
		if ($hamburger.length) {
			$hamburger.off('click').on('click', function () {
				handleBody(true)
			});
		}
	} else {
		handleBody();
	}
}

const handleHeader = function () {
	handleApplyCollapse($('#headerNavigation > ul'), true, true);
	handleCallMenu();
	$(window).resize(function () {
		let newWindowWidth = $('body').width();
		if (newWindowWidth !== windowWidth) {
			windowWidth = newWindowWidth;
			handleApplyCollapse($('#headerNavigation > ul'));
			handleCallMenu();
		}
	});
}


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
	if ($('#sectionNotification').length > 0 && $('#notificationClose').length > 0) {
		$('#notificationClose').click(() => {
			$('#sectionNotification').remove();
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
const handleScrollLenis = function () {
	if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
		const e = new Lenis;
		requestAnimationFrame((function t(o) {
			e.raf(o), requestAnimationFrame(t)
		})), e.on("scroll", ScrollTrigger.update), gsap.ticker.lagSmoothing(0)
	}
}

const handleSidebarMenu = function () {
	const body = $('body'),
		sidebar = $('#handleSidebar'),
		sidebarOpen = $('#handleOpenSidebar'),
		sidebarClose = $('#handleCloseSidebar');


	sidebarOpen.click(() => {
		body.addClass('sidebar-is-open');

		setTimeout((function () {
			sidebar.removeClass("short-mode")
			sidebar.addClass('full-mode');
		}), 300)
	});

	sidebarClose.click(() => {
		body.removeClass("sidebar-is-open");
		body.addClass("sidebar-is-closed");

		setTimeout((function () {
			sidebar.removeClass("full-mode");
			sidebar.addClass("short-mode")
		}), 500);

		setTimeout((function () {
			body.removeClass("sidebar-is-closed")
		}), 1000)
	})
}

const handleHandleSmoothScrollTarget = function () {
	$('.handleScrollTarget').on('click', function (event) {
		event.preventDefault();

		const elm = $(this);
		const targetID = elm.attr('data-target');
		const targetElement = $(targetID);

		if (targetElement.length) {
			const offsetTop = targetElement.offset().top;

			const currentScroll = $(window).scrollTop();
			const distance = Math.abs(offsetTop - currentScroll);

			const duration = Math.min(3600, Math.max(800, (distance / 1000) * 600));
			$('.handleScrollTarget').removeClass('isCurrent');
			elm.addClass('isCurrent');
			$('html, body').animate({
				scrollTop: offsetTop
			}, duration, 'easeInOutQuad');
		}
	});

	if (!$.easing.easeInOutQuad) {
		$.extend($.easing, {
			easeInOutQuad: function (x) {
				return x < 0.5 ? 2 * x * x : -1 + (4 - 2 * x) * x;
			}
		});
	}

	const offsetThreshold = 100;

	$(window).on('scroll', function () {
		const scrollPosition = $(window).scrollTop();

		$('.handleScrollTarget').each(function () {
			const elm = $(this);
			const targetID = elm.attr('data-target');
			const targetElement = $(targetID);

			if (targetElement.length) {
				const elementTop = targetElement.offset().top;
				const elementBottom = elementTop + targetElement.outerHeight();

				if (scrollPosition + offsetThreshold >= elementTop && scrollPosition + offsetThreshold < elementBottom) {
					$('.handleScrollTarget').removeClass('isCurrent');
					elm.addClass('isCurrent');
					return false;
				}
			}
		});
	});
}

$(document).ready(function () {
	handleHeader();
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
	handleScrollLenis();
	handleSidebarMenu();
	handleHandleSmoothScrollTarget();
});
