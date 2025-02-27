document.addEventListener("DOMContentLoaded", (() => {
	document.querySelectorAll("[scramble-link]").forEach((e => {
		let t = gsap.timeline({
			paused: !0
		});
		t.to(e.querySelector("[scramble-text]"), {
			scrambleText: {
				chars: "021zrotxinsmopsweknm",
				text: "{original}",
				speed: 2,
				delimiter: ""
			},
			duration: .8
		}), e.addEventListener("mouseenter", (() => {
			t.timeScale(1).play()
		})), e.addEventListener("mouseleave", (() => {
			t.timeScale(1.5).reverse()
		}))
	}));
	if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent) && void 0 === Webflow.env("editor")) {
		const e = new Lenis;
		requestAnimationFrame((function t(o) {
			e.raf(o), requestAnimationFrame(t)
		})), e.on("scroll", ScrollTrigger.update), gsap.ticker.lagSmoothing(0)
	}
	!function () {
		let e = document.querySelectorAll(".js-copy-btn");
		e && e.forEach((e => {
			e.addEventListener("click", (function (t) {
				t.preventDefault();
				let o = e.getAttribute("data-copy");
				document.querySelector("[data-copied='" + o + "']").select(), document.execCommand("copy"), e.closest(".copy-code-block").classList.add("copied"), window.getSelection().removeAllRanges(), setTimeout((function () {
					e.closest(".copy-code-block").classList.remove("copied")
				}), 2500)
			}))
		}))
	}(),
		function () {
			if (document.querySelector(".js-marquee-token-clone")) {
				let e = document.querySelector(".js-marquee-token-clone .marquee-content"),
					t = e.cloneNode(!0);
				e.after(t)
			}
		}(),
		function () {
			if (document.querySelector(".js-marquee-revolution-clone")) {
				let e = document.querySelector(".js-marquee-revolution-clone .marquee-content"),
					t = e.cloneNode(!0);
				e.after(t)
			}
		}(),
		function () {
			if (document.querySelector(".js-marquee-awards-clone")) {
				let e = document.querySelector(".js-marquee-awards-clone .marquee-content"),
					t = e.cloneNode(!0);
				e.after(t)
			}
		}(),
		function () {
			let e = document.querySelector(".js-open-aside-menu"),
				t = document.querySelector(".js-close-aside-menu"),
				o = document.querySelector(".aside-navbar"),
				n = document.querySelector("body");
			e && e.addEventListener("click", (function (e) {
				n.classList.add("aside-menu-is-opened"), setTimeout((function () {
					o.classList.remove("short-mode"), o.classList.add("full-mode")
				}), 300)
			})), t && t.addEventListener("click", (function (e) {
				n.classList.remove("aside-menu-is-opened"), n.classList.add("aside-menu-is-closed"), setTimeout((function () {
					o.classList.remove("full-mode"), o.classList.add("short-mode")
				}), 500), setTimeout((function () {
					n.classList.remove("aside-menu-is-closed")
				}), 1e3)
			}))
		}(),
		function () {
			const e = document.querySelector("#tab-user"),
				t = document.querySelector("#tab-developer");
			e && t && (e.classList.add("active"), e.addEventListener("click", (function () {
				e.classList.add("active"), t.classList.remove("active")
			})), t.addEventListener("click", (function () {
				t.classList.add("active"), e.classList.remove("active")
			})))
		}();
	const e = document.querySelector(".top-banner__close-btn"),
		t = document.querySelector(".top-banner"),
		o = document.querySelector(".site-header");
	e.addEventListener("click", (() => {
		t.classList.add("hidden"), localStorage.setItem("visibility", "hidden"), o.style.top = "0", document.querySelector("body").classList.add("body-no-banner")
	})), "hidden" == localStorage.getItem("visibility") && (o.style.top = "0", t.style.display = "none", document.querySelector("body").classList.add("body-no-banner"));
	document.querySelectorAll(".faq-wrap-2").forEach((e => {
		const t = e.querySelector(".faq-question-2"),
			o = e.querySelector(".faq-answer-2"),
			n = e.querySelector(".plus-wrap-2");
		t && t.addEventListener("click", (() => {
			o.classList.contains("active") ? (o.style.height = "0", o.classList.remove("active"), n.classList.remove("rotate")) : (o.style.height = `${o.scrollHeight + 24}px`, o.classList.add("active"), n.classList.add("rotate"))
		}))
	}));
	document.querySelector(".site-header .w-nav-button"), document.querySelector(".site-header");
	const n = document.querySelector("#team-count-item"),
		c = document.querySelectorAll("#main-team-list .team-card");
	n && c && (n.innerHTML = c.length);
	const s = document.querySelector("#advisors-count-item"),
		r = document.querySelectorAll("#advisors-team-list .team-card");
	s && r && (s.innerHTML = r.length);
	const a = document.querySelector("#partners-team-heading .team-row-count-item"),
		i = document.querySelectorAll("#partners-team-list .team-partners-logo");

	function l() {
		for (var e = document.querySelectorAll(".youtube-video"), t = 0; t < e.length; t++) {
			var o = "https://img.youtube.com/vi/" + e[t].dataset.embed + "/sddefault.jpg",
				n = e[t].dataset.title,
				c = new Image;
			c.src = o, c.alt = n, c.loading = "lazy", c.addEventListener("load", void e[t].appendChild(c)), e[t].addEventListener("click", (function () {
				var e = document.createElement("iframe");
				e.setAttribute("frameborder", "0"), e.setAttribute("allowfullscreen", ""), e.setAttribute("src", "https://www.youtube-nocookie.com/embed/" + this.dataset.embed + "?rel=0&showinfo=0&autoplay=1"), this.innerHTML = "", this.appendChild(e)
			}))
		}
	}

	a && i && (a.innerHTML = i.length), l(),
		function () {
			const e = document.querySelector(".js-load-video");
			e && e.addEventListener("click", (function () {
				setTimeout((function () {
					l()
				}), 500)
			}))
		}(), window.fsAttributes = window.fsAttributes || [], window.fsAttributes.push(["cmsload", e => {
		console.log("cmsload Successfully loaded!");
		const [t] = e;
		t.on("renderitems", (e => {
			setTimeout((function () {
				l()
			}), 500)
		}))
	}]), setTimeout((function () {
		document.querySelector("body").classList.add("page-ready")
	}), 2e3)
}));