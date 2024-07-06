

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
        x:500,
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