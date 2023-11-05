const inputEl = document.getElementById("input");
const errorEl = document.getElementById("error");
const resultEl = document.getElementById("result");
let errorTime;
let resultTime;
function updateResult(){
    if(inputEl.value <= 0 || isNaN(inputEl.value)){
        errorEl.innerText = "Please Enter a valid number!";
        clearTimeout(errorTime);
       errorTime = setTimeout(()=>{
            errorEl.innerText = "";
            inputEl.value = "";
        },2000);
    }
    else{
        resultEl.innerText = (+inputEl.value/2.205).toFixed(2);
        clearTimeout(resultTime); // imp prop
        resultTime= setTimeout(()=>{
            inputEl.value="";
            resultEl.innerText="";
        },10000);

    }
}
inputEl.addEventListener("input",updateResult);