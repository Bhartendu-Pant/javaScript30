var timer= 60;
var score =0;
var hitrn=0 ;

function increaseScore(){
    score += 1;
    document.querySelector("#scoreValue").textContent = score;
}
function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitValue").textContent=hitrn;
}

function makeBubble(){
    let clutter = "";
for(var i=1; i<=176;i++){
    clutter += ` <div class="bubble">${Math.floor(Math.random()*10)} </div>`;
}

document.querySelector("#pbtm").innerHTML=clutter;
}
function runTimer(){
   var timerInt = setInterval(function(){
        if(timer > 0){
        timer--;
        document.querySelector("#timerValue").textContent=timer;
        }
        else{
            clearInterval(timerInt);
            document.querySelector("#pbtm").innerHTML=`<h1 id="center">Time Over!</h1>`
        }
    },1000);

}

document.querySelector("#pbtm")
.addEventListener("click",function(detail){
    var clickedNumber = Number(detail.target.textContent);
    if(clickedNumber === hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }

});

runTimer();
makeBubble();
getNewHit();
