document.addEventListener("DOMContentLoaded" ,(e)=>{
    console.log(e , gsap)
    gsap.to(".box" , {
        x:300,
        duration:2,
        ease:"back" 
    })

})