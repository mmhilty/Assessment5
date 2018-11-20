$(document).ready(function () {

var questionbox = document.getElementById("questionbox");
var i = 1;
var score = 0;


printq1();
printq2();
printq3();
printq4();

});
function checkRight(value){
    if (value === true){
        alert("Correct!");
    } else {
        alert("Incorrect.");
    }
}


function printq1(){
    questionbox.innerHTML = ('<p>In the first “Avengers” movie, which character utters the words “Hulk smash”?</p>    <form>        <input type="radio" name="answer" value=wrong onclick="checkRight(false)">1. Pepper Potts<br>        <input type="radio" name="answer" value=right onclick="checkRight(true)">2. Captain America<br>        <input type="radio" name="answer" value=wrong onclick="checkRight(false)">3. Hulk<br>    </form>')
}

function printq2(){
    questionbox.innerHTML += ('<p>In which film does Stan Lee cameo as a bartender? </p>    <form>        <input type="radio" name="answer" value=wrong onclick="checkRight(false)">1. Venom<br>        <input type="radio" name="answer" value=right onclick="checkRight(true)">2. Ant Man<br>        <input type="radio" name="answer" value=wrong onclick="checkRight(false)">3. Doctor Strange<br>    </form>')
}

function printq3(){
    questionbox.innerHTML += ('<p>Which Marvel film does NOT include either an appearance or dialogue by the original TV Hulk?</p>    <form>        <input type="radio" name="answer" value=right onclick="checkRight(true)">1. Thor: Ragnarok<br>        <input type="radio" name="answer" value=wrong onclick="checkRight(false)">2. The Incredible Hulk<br>        <input type="radio" name="answer" value=wrong onclick="checkRight(false)">3. The Avengers<br>    </form>')
}

function printq4(){
    questionbox.innerHTML += ('<p>Which Marvel Chris has been in more MCU films than the others?</p>    <form>        <input type="radio" name="answer" value=wrong onclick="checkRight(false)">1. Hemsworth<br>        <input type="radio" name="answer" value=wrong onclick="checkRight(false)">2. Pratt<br>        <input type="radio" name="answer" value=right onclick="checkRight(true)">3. Evans<br>    </form>')
}