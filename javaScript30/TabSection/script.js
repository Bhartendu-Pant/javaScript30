const tabs = document.querySelector(".tabs");
const btns = document.querySelectorAll(".button");
const articles = document.querySelectorAll(".content");

tabs.addEventListener("click",(event)=>{
    const id = event.target.dataset.id;
    if(id){
        btns.forEach((btn)=>{
            btn.classList.remove("active");
        })
        event.target.classList.add("active");

        articles.forEach((article)=>{
            article.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
    }
});