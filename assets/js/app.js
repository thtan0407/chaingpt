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

$(document).ready(function () {
	handleScrambleText();
});
