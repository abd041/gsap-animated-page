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





const items = document.querySelectorAll(".sticky-item");
const cards = document.querySelectorAll(".sticky-card");

gsap.to({}, {
  scrollTrigger: {
    trigger: ".sticky-section",
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    onUpdate: (self) => {

      const progress = self.progress;

      let index = 0;

      if (progress < 0.33) index = 0;
      else if (progress < 0.66) index = 1;
      else index = 2;

      // reset all
      items.forEach(i => i.classList.remove("active"));
      cards.forEach(c => c.classList.remove("active"));

      // activate current
      items[index].classList.add("active");
      cards[index].classList.add("active");

    }
  }
});


const panels = gsap.utils.toArray(".panel");

gsap.to(panels, {
  xPercent: -100 * (panels.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".horizontal",
    pin: true,
    scrub: 1,
    snap: 1 / (panels.length - 1),
    end: () => "+=" + document.querySelector(".horizontal-track").offsetWidth
  }
});


panels.forEach((panel) => {
  gsap.from(panel, {
    opacity: 0,
    scale: 0.8,
    scrollTrigger: {
      trigger: panel,
      containerAnimation: ScrollTrigger.getAll()[0],
      start: "left center"
    }
  });
});

});