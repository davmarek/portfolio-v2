//proměné menu control
let menuOpen = document.getElementById("menuOpen");
let menuClose = document.getElementById("menuClose");

//otevření menu
menuOpen.addEventListener("click", () => {
	gsap.to("#menu", {
		duration: 0.5,
		right: 0,
		ease: "power2.inOut",
	});
});

//zavření menu
menuClose.addEventListener("click", () => {
	gsap.to("#menu", {
		duration: 0.5,
		right: "-100%",
		ease: "power3.inOut",
	});
});
