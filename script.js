

// hero section

function breakTheText(){

    var brandName = document.querySelector(".hero-text")

    var brandNameText = brandName.textContent

    var splittedText = brandNameText.split("")

    var halfValue = Math.floor(splittedText.length/2)

    var clutter  = ""

    splittedText.forEach(function(elem,idx){
        if(idx<halfValue){
            clutter += `<span class ="a">${elem}</span>`
        }else{
            clutter += `<span class ="b">${elem}</span>`
        }
    })

    brandName.innerHTML = clutter
}

breakTheText()


gsap.from(".hero-text .a",{
    y:80,
    opacity:0,
    duration:0.9,
    delay:0.5,
    stagger:0.15,
    
})
gsap.from(".hero-text .b",{
    y:80,
    opacity:0,
    duration:0.9,
    delay:0.5,
    stagger:-0.15
})




function writeText() {
    var heroDes = document.querySelector(".hero-des")
    var heroDesText = heroDes.textContent
    var splittedText = heroDesText.split("")
  
    var chars = []
  
    splittedText.forEach(function(char) {
      chars.push(`<span>${char}</span>`)
    })
  
    heroDes.innerHTML = chars.join("")
  
    gsap.from(".hero-des span", {
      opacity: 0,
      y: 20,
      duration: 0.4,
      delay: function(index) {
        return index * 0.08
      },
      ease: "power2.out"
    })
}
  
writeText()
