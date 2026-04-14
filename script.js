document.addEventListener("DOMContentLoaded" ,(e)=>{
//     console.log(e , gsap)
//    let tweenTp = gsap.to(".box" , {
//         x:300,
//         duration:3,
//         ease:"back",
//         onComplete:()=>{
//             console.log("animation complted")
//         },
//         repeat:-1 , // to run it for infinite time

//     })


// Gsap from method to animate the objects from a specific position to current position


gsap.from(".box" ,{
    x:300,
    opacity:0,
    duration:2

})


    document.querySelector("#play").onclick =()=> tweenTp.play()
    document.querySelector("#pause").onclick =()=> tweenTp.pause()
    document.querySelector("#resume").onclick =()=> tweenTp.resume()
    document.querySelector("#restart").onclick =()=> tweenTp.restart()
    document.querySelector("#reverse").onclick =()=> tweenTp.reverse()
})