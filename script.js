document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger)
  
  gsap.to(".box",{
    x:300,
    rotation:360,
    scrub:true,
    scrollTrigger:{
        trigger: ".section2",
        start: "top 70%",
        end: "+=2000",
        scrub: 1,
        pin: true,
    }
  })

    gsap.to(".image", {
    clipPath: "inset(0 0% 0 0)",
    scale: 1,
    duration: 1.8,
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".image-wrapper",
      start: "top 15%"
    }
  });
});