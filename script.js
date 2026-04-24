document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // INITIAL STATE (important)
  gsap.set(".card", {
    y: 100,
    opacity: 0,
    scale: 0.8
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "+=150%",
      scrub: true,
      pin: true
    }
  });

  // Cards appear
  tl.to(".card", {
    y: 0,
    opacity: 1,
    scale: 1,
    stagger: 0.1
  }, 0);

  // Center animation
  tl.to(".hero-title", {
    scale: 0.6,
    transformOrigin: "top center"
  }, 0);

  tl.to(".hero-content", {
    y: -120
  }, 0);

  tl.to(".hero-text", {
    opacity: 0
  }, 0.2);

  tl.to(".hero-btn", {
    opacity: 0
  }, 0.3);

  // LEFT movement (up + slight right)
  tl.to(".card-1", { y: -250, x: 50 }, 0);
  tl.to(".card-2", { y: -350, x: 30, scale: 1.2 }, 0);
  tl.to(".card-3", { y: -200, x: 60 }, 0);

  // RIGHT movement (down + slight left)
  tl.to(".card-4", { y: 250, x: -50 }, 0);
  tl.to(".card-5", { y: 350, x: -30, scale: 0.9 }, 0);
  tl.to(".card-6", { y: 200, x: -60 }, 0);


  gsap.utils.toArray(".feature").forEach((feature) => {

  gsap.from(feature, {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: feature,
      start: "top 80%",
      
    }
  });

});

});