let bar = document.querySelector("#bar")
let nav = document.querySelector("#nav")
bar.addEventListener("click", function(){
    nav.classList.toggle("responsive-list")
})
let internal = document.querySelector("#internal")
let overview = document.querySelector("#overview")
let surface = document.querySelector("#surface")
let planetImg = document.querySelector("#planetimg")
let surfaceImg = document.querySelector("#surface-img")


internal.addEventListener("click",function(){
    planetImg.src = "./images/planet-"+internal.value+"-internal.svg"
    surfaceImg.src = ""
    surfaceImg.style.display = "none"
})
overview.addEventListener("click",function(){
    planetImg.src = "./images/planet-"+overview.value+".svg"
    surfaceImg.src = ""
    surfaceImg.style.display = "none"

})
surface.addEventListener("click",function(){
    surfaceImg.style.display = "block"
    surfaceImg.src = "./images/geology-"+surface.value+".png"
    planetImg.src = "./images/planet-"+overview.value+".svg"
})