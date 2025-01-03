const handleScrambleText = function () {
	gsap.registerPlugin(ScrambleTextPlugin);
	gsap.config({trialWarn: false});

	const scrambleLists = gsap.utils.toArray('.scramble');

	scrambleLists.map(function (scrambleItem) {
		let tween = gsap.to(scrambleItem, {
			scrambleText: {chars: "021zrotxinsmopsweknm", text: "{original}", speed: 2, delimiter: ""},
			duration: 0.8
		});

		$(scrambleItem).on('mouseenter', function (e) {
			tween.play();
		});
		$(scrambleItem).on("mouseleave", function () {
			tween.reverse();
		});
	})
}

$(document).ready(function () {
	handleScrambleText();
});
