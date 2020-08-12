//swiper
var swiper = new Swiper(".swiper-container", {
	slidesPerView: 1.5,
	spaceBetween: 32,
	freeMode: true,
	breakpoints: {
		576: {
			slidesPerView: 2.5,
		},
		768: {
			slidesPerView: 3,
		},
		992: {
			slidesPerView: 4,
		},
		1200: {
			slidesPerView: 4,
		},
	},
});

// úvodní fady

gsap.from(".hero__text > *", {
	duration: 0.6,
	x: -32,
	opacity: 0,
	delay: 0.3,
	stagger: 0.15,
	ease: "power2.inOut",
});

gsap.from(".hero__work", {
	duration: 0.8,
	x: -32,
	opacity: 0,
	delay: 1,
	ease: "power2.inOut",
});

//about sekce
gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: "none" });

gsap.timeline({
	scrollTrigger: {
		trigger: ".about",
		start: "62% center",
		end: "120% top",
		scrub: true,
		pin: ".about",
	},
})
	.to(".about__img", {
		opacity: 0,
		y: -20,
		scale: 0.8,
	})
	.from(".about__text", {
		opacity: 0,
		y: 80,
	});

gsap.timeline({
	scrollTrigger: {
		trigger: ".hero",
		start: "top top",
		end: "80% top",
		scrub: true,
	},
})
	.to(".hero__text .h1", {
		y: -240,
	})
	.to(
		".hero__text .sub",
		{
			y: -180,
		},
		0
	)
	.to(
		".hero__work .work__text",
		{
			y: -140,
		},
		0
	)
	.to(
		".hero__work .work__slider",
		{
			y: -100,
		},
		0
	);
