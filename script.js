const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");

let setClock = () => {
  const currentDate = new Date();
  //console.log(currentDate)
  const secondsRatio = currentDate.getSeconds() / 60;
  //console.log(secondsRatio)
  const minutesRatio =  (secondsRatio +  currentDate.getMinutes()) /60 // 60;
  //console.log(minutesRatio)
  const hoursRatio = (minutesRatio +  currentDate.getHours()) / 12;
  //console.log(hoursRatio)
  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);
};
  
let setRotation = (element, rotationRatio) => {
  element.style.setProperty("--rotation", rotationRatio * 360);
};

setInterval(setClock, 1000);
setClock();
