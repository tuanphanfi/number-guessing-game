let selectYourGuess = document.getElementById('yourGuess');
let selectHistory = document.getElementById('history')
//generate randomNumber
let randomNumber = Math.round(Math.random() * 10);
//remaining guess count
let remainingGuessCount = 10;
//reamining guess select
let selectRemainingGuess = document.getElementById('remaining-guess')
// select notification
let notification = document.getElementById('notification')
//history array implemation
let history = []
//selectRemainingGuess.innerHTML = remainingGuessCount;
selectRemainingGuess.innerHTML = remainingGuessCount;
function insertToHistory(value) {
    notification.innerHTML = value;
}

let feedBack = [`Yay, congrastulation. You make the right guess`, `Your guess is higher`, `Your guess is lower`]

let i = 0;
guess = () => {
    timecounting()// fire the timecounting function!!

    let yourGuess = parseInt(selectYourGuess.value);

    if (remainingGuessCount > 0) {
        remainingGuessCount--;
        // console.log(remainingGuessCount)
        if ((yourGuess) === randomNumber) {
            insertToHistory(`${feedBack[0]} The number is ${randomNumber}`)
        } else if (yourGuess > randomNumber) {
            insertToHistory(`Your guess is higher`)
        } else if (yourGuess < randomNumber) {
            insertToHistory(`Your guess is lower`)
        }

    } else {
        insertToHistory(`You are out of guess!!!`)
    }
    selectRemainingGuess.innerHTML = remainingGuessCount;
    console.log("Random Number", randomNumber)

    //push into array
    if (i < 3) {
        history.push(yourGuess)
        selectHistory.innerHTML += history[i] + ', '
        i++;
    } else {
        history[i]
    }

    // for (let i = 0; i < history.length; i++) {
    //     selectHistory.innerHTML += history[i] + ', '
    //     // if(i 2 )

    // }
}

reset = () => {
    remainingGuessCount = 3;

    selectHistory.innerHTML = "";
    history.splice(0, 3)
    selectRemainingGuess.innerHTML = remainingGuessCount;

    insertToHistory(`Let's play a new game`)
    randomNumber = Math.round(Math.random() * 10);
    // timecounting()// fire the timecounting function!!
    time = 5;
}


let time = 5    // time start from 0
let myTime; // timer will be assign to this variable
function timecounting() {
    myTime = setInterval(() => {
        if (time > 0) {
            time--
            document.getElementById('timecount').innerHTML = time
        } else {
            document.getElementById('timecount').innerHTML = "Running out of time :(."
        }


    }, 1000)// every 1 second, it will add 1 into time variable (computer use millisecond so 1000 is 1 second)
}
timecounting()// fire the timecounting function!!