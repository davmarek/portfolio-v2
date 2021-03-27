//proměné menu control
let menuOpen = document.getElementById("menuOpen");
let menuClose = document.getElementById("menuClose");
let menu = document.getElementById("menu");

// menu offset adjust
menu.style.right = "-100%";
let adjustMenuOffset = () => {
	let spaceFromRight = menu.style.right;
	if (spaceFromRight == "-50%" || spaceFromRight == "-100%")
		if (window.innerWidth > 767) menu.style.right = "-100%";
		else menu.style.right = "-50%";
};
adjustMenuOffset();
window.addEventListener("resize", adjustMenuOffset);

//otevření menu
menuOpen.addEventListener("click", () => {
	gsap.to("#menu", {
		duration: 0.5,
		right: "0%",
		ease: "power2.inOut",
	});
});

//zavření menu
menuClose.addEventListener("click", () => {
	if (window.innerWidth > 768)
		gsap.to("#menu", {
			duration: 0.5,
			right: "-100%",
			ease: "power3.inOut",
		});
	else {
		gsap.to("#menu", {
			duration: 0.5,
			right: "-50%",
			ease: "power3.inOut",
		});
	}
});
