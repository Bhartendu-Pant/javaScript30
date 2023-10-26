
const audio = new Audio('tink.wav');
const secondHand=document.querySelector('.second-hand');
const minutesHand=document.querySelector('.min-hand');
const hoursHand=document.querySelector('.hour-hand');
function setDate(){
    const now=new Date();

    const seconds=now.getSeconds();
    const secondsDegrees=((seconds/60)*360)+90;
    secondHand.style.transform=`rotate(${secondsDegrees}deg)`;
    if(seconds === 0){
        secondHand.style.transition='none';
    }

    const minutes=now.getMinutes();
    const minutesDegrees=((minutes/60)*360)+90;
    minutesHand.style.transform=`rotate(${minutesDegrees}deg)`;

    const hours=now.getHours();
    const hoursDegrees=((hours/12)*360)+90;
    hoursHand.style.transform=`rotate(${hoursDegrees}deg)`;

    audio.play();
}

setInterval(setDate,1000);