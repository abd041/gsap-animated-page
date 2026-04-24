document.addEventListener("DOMContentLoaded", () => {
const tl = gsap.timeline();

tl.from(".hero-title", {
  y: 100,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
})
.from(".hero-text", {
  y: 50,
  opacity: 0,
  duration: 0.8
}, "-=0.5")
.from(".hero-btn", {
  y: 30,
  opacity: 0,
  duration: 0.6
}, "-=0.4");
});