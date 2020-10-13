let hourHand=document.querySelector(".hour");
let minuteHand=document.querySelector(".minute");
let secondHand=document.querySelector(".second");


function rotate(){

    const currentDate= new Date();                  //get the currentDate object from which we can get hours,minutes,seconds

    const hours=currentDate.getHours();             //get hours
    const minutes=currentDate.getMinutes();         //get minutes
    const seconds=currentDate.getSeconds();        //get seconds

//rotating fraction-->how many fractions to rotate for each hand
    const secondsFraction=seconds/60;
    const minutesFraction=(secondsFraction+minutes)/60;
    const hoursFraction=(minutesFraction+hours)/12;

//actual degree to rotate
    const secondsRotate=secondsFraction*360;
    const minutesRotate=minutesFraction*360;
    const hoursRotate=hoursFraction*360;

    
//apply rotate style to each element
    secondHand.style.transform="rotate("+ secondsRotate +"deg)";
    minuteHand.style.transform="rotate("+ minutesRotate +"deg)";
    hourHand.style.transform="rotate("+ hoursRotate +"deg)";

   
}

// for every 1000 milliseconds(ie, 1 second) interval, activate the rotate() function.

setInterval(rotate, 1000);



