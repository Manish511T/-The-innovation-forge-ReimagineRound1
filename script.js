

// navbar

function navbar() {
    var tl = gsap.timeline();


    tl.from(".logo", {
        y: -30,
        opacity: 0,
        duration: 0.8,
    })


    tl.from(".searchBar", {
        y: -30,
        opacity: 0,
        duration: 0.5,
    })
    tl.from("i", {
        y: -30,
        opacity: 0,
        duration: 0.5,
    })

    tl.from(".item", {
        y: -30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
    })


}

navbar();





// hero section
function hero() {



    function breakTheText() {

        var brandName = document.querySelector(".hero-text")

        var brandNameText = brandName.textContent

        var splittedText = brandNameText.split("")

        var halfValue = Math.floor(splittedText.length / 2)

        var clutter = ""

        splittedText.forEach(function (elem, idx) {
            if (idx < halfValue) {
                clutter += `<span class ="a">${elem}</span>`
            } else {
                clutter += `<span class ="b">${elem}</span>`
            }
        })

        brandName.innerHTML = clutter
    }

    breakTheText()


    gsap.from(".hero-text .a", {
        y: 80,
        opacity: 0,
        duration: 0.9,
        delay: 0.5,
        stagger: 0.15,

    })
    gsap.from(".hero-text .b", {
        y: 80,
        opacity: 0,
        duration: 0.9,
        delay: 0.5,
        stagger: -0.15
    })



    // hero description 
    function writeText() {
        var heroDes = document.querySelector(".hero-des")
        var heroDesText = heroDes.textContent
        var splittedText = heroDesText.split("")

        var chars = []

        splittedText.forEach(function (char) {
            chars.push(`<span>${char}</span>`)
        })

        heroDes.innerHTML = chars.join("")

        gsap.from(".hero-des span", {
            opacity: 0,
            y: 20,
            duration: 0.4,
            delay: function (index) {
                return index * 0.08
            },
            ease: "power2.out"
        })
    }

    writeText()

}

hero();


// page1



function page1() {
    gsap.from(".page1 img", {
        x: 1000,
        y: 300,
        scale: 0,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
            trigger: ".page1",
            scroller: "body",
            markers: false,
            start: "top 30%",
            end: "top 100%",
            scrub: 5,
            pin: true

        }

    })

    gsap.from(".title", {
        x: -100,
        scale: 0,
        opacity: 0,
        scrollTrigger: {
            trigger: ".page1",
            scroller: "body",
            markers: false,
            start: "top 20%",
            end: "top 80%",
            scrub: 4,
            pin: true

        }
    })



    var tl = gsap.timeline();
    tl.from(".dets", {
        opacity: 0,
        y: -30,
        stagger: 2,
        duration: 4,
        scrollTrigger: {
            trigger: ".page1",
            scroller: "body",
            markers: false,
            start: "top 20%",
            end: "top 80%",
            scrub: 3,
            pin: true

        }
    })
}

page1()




// banner

function banner() {





    gsap.from("#l2", {
        opacity: 0,
        x: -200,
        z: -50,
        scale: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".banner",
            scroller: "body",
            markers: false,
            start: "top 80%",
            end: "top 40%",
            scrub: 2,
        }
    })
    gsap.from("#l1", {
        opacity: 0,
        x: -200,
        z: -50,
        scale: 0,
        duration: 1,
        delay: 0.9,
        scrollTrigger: {
            trigger: ".banner",
            scroller: "body",
            markers: false,
            start: "top 60%",
            end: "top 40%",
            scrub: 2
        }

    })
    gsap.from("#r1", {
        opacity: 0,
        x: 200,
        z: -50,
        scale: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".banner",
            scroller: "body",
            markers: false,
            start: "top 80%",
            end: "top 40%",
            scrub: 2,
        }

    })
    gsap.from("#r2", {
        opacity: 0,
        x: 200,
        z: -50,
        scale: 0,
        duration: 1,
        delay: 0.9,
        scrollTrigger: {
            trigger: ".banner",
            scroller: "body",
            markers: false,
            start: "top 60%",
            end: "top 40%",
            scrub: 2
        }

    })


    gsap.from(".bnr_text h1", {
        opacity: 0,
        y: 150,
        duration: 1,
        scrollTrigger: {
            trigger: ".banner",
            scroller: "body",
            markers: false,
            start: "top 30%",
            end: "top 18%",
            scrub: 2
        }
    })
    gsap.from(".bnr_text h3", {
        opacity: 0,
        y: -150,
        duration: 1,
        scrollTrigger: {
            trigger: ".banner",
            scroller: "body",
            markers: false,
            start: "top 30%",
            end: "top 18%",
            scrub: 2
        }
    })

}

banner()



function map(){
    gsap.from(".map .text .ktm h1",{
        y:200,
        opacity:0,
        duration:0.8,
        scrollTrigger:{
            trigger:".map",
            scroller:"body",
            markers:false,
            start:"top 45%",
            end:"top 10%",
            scrub:1
        }
    })
    gsap.from(".map .text .worldwide h2",{
        x:-400,
        opacity:0,
        duration:0.8,
        scrollTrigger:{
            trigger:".map",
            scroller:"body",
            markers:false,
            start:"top 45%",
            end:"top 10%",
            scrub:1
        }
    })
    gsap.from(".map .text .dots",{
        x:200,
        opacity:0,
        duration:0.8,
        scrollTrigger:{
            trigger:".map",
            scroller:"body",
            markers:false,
            start:"top 45%",
            end:"top 10%",
            scrub:1
        }
    })
    gsap.from(".map img",{
        y:-200,
        opacity:0,
        duration:0.8,
        scrollTrigger:{
            trigger:".map",
            scroller:"body",
            markers:false,
            start:"top 45%",
            end:"top 10%",
            scrub:1
        }
    })

}

map()




// achievement
function counter(){
    const createOdometer = (el, value) => {
        const odometer = new Odometer({
            el:el,
            value:0,
        });

        let hasRun =false;

        const options = {
            threshold:[0,0.9],
        };

        const callback = (entries,observer) =>{
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    if(!hasRun){
                        odometer.update(value);
                        hasRun = true;
                    }

                }
            })
        }

        const observer = new IntersectionObserver(callback,options);
        observer.observe(el)


    }
    
    const titleOdometer = document.querySelector("#title-value");
    
    createOdometer(titleOdometer,320);
    
    const victoriesOdometer = document.querySelector("#victories-value");
    
    createOdometer(victoriesOdometer,60);
    
    
    const rallyOdometer = document.querySelector("#rally-value");
    
    createOdometer(rallyOdometer,18);
    
}

counter()

function achievement(){
    gsap.from(".achivements .text-box .a",{
        x:-200,
        duration:1,
        opacity:0,
        scrollTrigger:{
            trigger:".achivements",
            scroller:"body",
            markers:false,
            start:"top 45%",
            end:"top 10%",
            scrub:1,
        }
        
    })
    gsap.from(".achivements .text-box .b",{
        x:200,
        duration:1,
        opacity:0,
        scrollTrigger:{
            trigger:".achivements",
            scroller:"body",
            markers:false,
            start:"top 45%",
            end:"top 10%",
            scrub:1
        }
        
    })
    gsap.from(".achivements .text-box .c",{
        x:-200,
        duration:1,
        opacity:0,
        scrollTrigger:{
            trigger:".achivements",
            scroller:"body",
            markers:false,
            start:"top 45%",
            end:"top 10%",
            scrub:1
        }
        
    })
    gsap.from(".achivements .text-box .d",{
        x:200,
        duration:1,
        opacity:0,
        scrollTrigger:{
            trigger:".achivements",
            scroller:"body",
            markers:false,
            start:"top 45%",
            end:"top 10%",
            scrub:1
        }
        
        
    })
    gsap.from(".achivements .text-box .e",{
        x:-200,
        duration:1,
        opacity:0,
        scrollTrigger:{
            trigger:".achivements",
            scroller:"body",
            markers:false,
            start:"top 45%",
            end:"top 10%",
            scrub:1
        }
        
    })
    gsap.from(".achivements .text-box .f",{
        x:200,
        duration:1,
        opacity:0,
        scrollTrigger:{
            trigger:".achivements",
            scroller:"body",
            markers:false,
            start:"top 45%",
            end:"top 10%",
            scrub:1
        }
        
    })
    gsap.from(".achivements .text-box .g",{
        x:-200,
        duration:1,
        opacity:0,
        scrollTrigger:{
            trigger:".achivements",
            scroller:"body",
            markers:false,
            start:"top 45%",
            end:"top 10%",
            scrub:1
        }
        
    })
    gsap.from(".achivements .text-box .h",{
        x:200,
        duration:1,
        opacity:0,
        scrollTrigger:{
            trigger:".achivements",
            scroller:"body",
            markers:false,
            start:"top 45%",
            end:"top 10%",
            scrub:1
        }
        
    })
    gsap.from(".achivements .text-box .i",{
        x:-200,
        duration:1,
        opacity:0,
        scrollTrigger:{
            trigger:".achivements",
            scroller:"body",
            markers:false,
            start:"top 45%",
            end:"top 10%",
            scrub:1
        }
        
    })
    gsap.from(".achivements .text-box .j",{
        x:200,
        duration:1,
        opacity:0,
        scrollTrigger:{
            trigger:".achivements",
            scroller:"body",
            markers:false,
            start:"top 45%",
            end:"top 10%",
            scrub:1
        }
        
    })
    gsap.from(".achivements .text-box .k",{
        x:-200,
        duration:1,
        opacity:0,
        scrollTrigger:{
            trigger:".achivements",
            scroller:"body",
            markers:false,
            start:"top 45%",
            end:"top 10%",
            scrub:1
        }
        
    })

    gsap.from(".achivements .text-box h1",{
        scale:0,
        duration:2,
        opacity:0,
        scrollTrigger:{
            trigger:".achivements",
            scroller:"body",
            markers:false,
            start:"top 45%",
            end:"top 10%",
            scrub:1
        }
    })


}

achievement()


// advertisement

function ads(){
    gsap.from(".advertisement .section2  .heading",{
        x: 100,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:".advertisement .section2  .heading",
            scroller:"body",
            markers:false,
            start:"top 60%",
            end:"top 50%",
            scrub:2
        }
    })
    gsap.from(".advertisement .section2  p",{
        x: -200,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:".advertisement .section2  .heading",
            scroller:"body",
            markers:false,
            start:"top 54%",
            end:"top 46%",
            scrub:2
        }
    })
    gsap.from(".advertisement .section2  .bottom",{
        y:200,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:".advertisement .section2  .heading",
            scroller:"body",
            markers:false,
            start:"top 50%",
            end:"top 40%",
            scrub:2
        }
    })
}

ads()

function footerLogo(){
    gsap.from(".footer .logo img",{
        y:200,
        opacity:1,
        duration:1,
        scrollTrigger:{
            trigger:".footer",
            scroller:"body",
            markers:false,
            start:"top 40%",
            end:"top 30%",
            scrub:2

        }
    })
}

footerLogo()