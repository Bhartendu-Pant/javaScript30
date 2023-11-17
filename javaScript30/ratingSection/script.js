const starsEl = document.querySelectorAll(".fa-star");
const emojiEl = document.querySelectorAll(".far");
const colors = ["red","orange","yellow","lightgreen","green"];
updateRating(3)
starsEl.forEach((starEl,index) =>{
    starEl.addEventListener("click",()=>{
        updateRating(index);
    });
});

function updateRating(index){
    starsEl.forEach((starEl,idx)=>{
        if(idx < index + 1){
            starEl.classList.add("active");
        }
        else{
            starEl.classList.remove("active");
        }
    });

    emojiEl.forEach(emjEl =>{
        emjEl.style.transform=`translateX(${index*(-50)}px)`;
        emjEl.style.color = colors[index];
    })
}