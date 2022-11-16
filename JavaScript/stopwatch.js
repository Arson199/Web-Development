//  Stopwatch

const stopWatchTag = document.getElementsByClassName("stopWatch")[0];
const startButtonTag = document.getElementsByClassName("startButton")[0];
const pauseButtonTag = document.getElementsByClassName("pauseButton")[0];
const continueButtonTag = document.getElementsByClassName("continueButton")[0];
const restartButtonTag = document.getElementsByClassName("restartButton")[0]; 

let seconds = 0, minutes = 0, hours = 0;

const startTime = () => {
   seconds += 1;
   if(seconds === 60){
    seconds = 0;
    minutes += 1;
    if(minutes === 60){
        minutes = 0;
        hours += 1;
    }
   }
   const secondText = seconds < 10 ? "0" + seconds.toString() : seconds;
   const minuteText = minutes < 10 ? "0" + minutes.toString() : minutes;
   const hourText = hours < 10 ? "0" + hours.toString() : hours;
   stopWatchTag.textContent = hourText + ":" + minuteText + ":" + secondText;
  console.log(hours,minutes,seconds); 
};
let inetervalId;
startButtonTag.addEventListener("click",()=>{
    // setInterval(callback,delay);
    inetervalId = setInterval(startTime, 1000); //1000 = 1 second
})
pauseButtonTag.addEventListener("click",()=>{
    clearInterval(inetervalId);
});
continueButtonTag.addEventListener("click",()=>{
    clearInterval(inetervalId);
    inetervalId = setInterval(startTime, 1000); //1000 = 1 second
});
restartButtonTag.addEventListener("click",()=>{
    clearInterval(inetervalId);
    seconds = 0,minutes = 0,hours = 0;
    inetervalId = setInterval(startTime, 1000); //1000 = 1 second
})