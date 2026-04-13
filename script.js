document.addEventListener("DOMContentLoaded" ,(e)=>{
    console.log(e , gsap)
   let tweenTp = gsap.to(".box" , {
        x:300,
        duration:16,
        ease:"back" 
    })


    document.querySelector("#play").onclick =()=> tweenTp.play()
    document.querySelector("#pause").onclick =()=> tweenTp.pause()
    document.querySelector("#resume").onclick =()=> tweenTp.resume()
    document.querySelector("#restart").onclick =()=> tweenTp.restart()
    document.querySelector("#reverse").onclick =()=> tweenTp.reverse()
})