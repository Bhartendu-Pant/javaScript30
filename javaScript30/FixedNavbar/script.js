const navbarEl=document.querySelector(".navbar");
const bottomContainerElement= document.querySelector(".bottom-container");

window.addEventListener("scroll",()=>{
    // console.log(window.scrollY);

    if(window.scrollY > bottomContainerElement.offsetTop - navbarEl.offsetHeight - 50){
        navbarEl.classList.add("active");
    }else{
        navbarEl.classList.remove("active");
    }
})