

const tl=gsap.timeline();


// tl.from(".navbar-brand",{
//     opacity:0,
//     y:-30,
//     duration:1,
//     stagger:0.55,
//     delay:2
// })


gsap.from(".bb",{
x:-259,
opacity:0,
duration:2,

})

gsap.from(".zoom",{
    opacity:0,
    scale:0,
    duration:2,

})



tl.from(".tt",{
    opacity:0,
    y:-100,
    duration:0.77,
    stagger:0.33,
    // delay:1
})



const cardHoverBtn=document.querySelectorAll(".card__button");


cardHoverBtn.forEach(element => {
    
element.addEventListener("mouseover",()=>{
  element.style.opacity="0.5"
  element.style.transition="0.4s"
})

element.addEventListener("mouseout",()=>{
    element.style.opacity="1"
    element.style.transition="0.4s"
  })
  
});


    
