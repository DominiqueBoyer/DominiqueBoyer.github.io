
// creating timer it should start when the page is refreshed with new question

var seconds = 45;
function makeTimer(){
    seconds --;
    document.getElementById("clock").textContent = seconds;
    if (seconds <= 0){
        clearInterval(countdown);
        document.getElementById("clock").textContent = "Sorry. Times Up!";
    }
}

var countdown = setInterval(makeTimer, 1000);

//this will hopefully make it change the color of the timer

let colorChanger = document.getElementById("clock");
let colors = ["red","orange", "yellow", "green","blue","purple"];
let counter =0;
function changeColor (){
    if(counter >= colors.length){
        counter =0;
    }
    colorChanger.style.background = colors[counter];
    counter++;
}

let timeColors = setInterval(changeColor, 1000);
