const containerEl=document.querySelector(".span2");
const careers = ["Web Developer","Mern Stack Developer","React Lover"];
let careerIndex = 0;
let charIndex = 0;
updateText();
function updateText(){
    charIndex++;
    containerEl.innerHTML=`<span class="span2">a ${careers[careerIndex].slice(0,charIndex)}</span>`
    
    if(charIndex === careers[careerIndex].length){
        careerIndex++;
        charIndex = 0;
    }

    if(careerIndex === careers.length){
        careerIndex = 0;
    }
    setTimeout(()=>{
        updateText();
    },200)
}
