const menuBtn = document.querySelector(".main-menu-btn")
const mainMenu= document.querySelector(".main-menu")

const menuSrc = menuBtn.src

menuBtn.addEventListener("click", (e) => {
    if(menuBtn.src == menuSrc ){
        menuBtn.src ="./images/icon-close.svg"
        mainMenu.classList.add("show")
    }
    else{
        menuBtn.src = "./images/icon-hamburger.svg"
        mainMenu.classList.remove("show")
    }
})