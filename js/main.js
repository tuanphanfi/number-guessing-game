let selectYourGuess = document.getElementById('yourGuess');
let selectHistory = document.getElementById('history')
//generate randomNumber
let randomNumber = Math.round(Math.random() * 10);
//remaining guess count
let remainingGuessCount = 5;
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

checkAvailable = (guess, array) => {
    //check is the upcoming input avaiable already or not
    for (i = 0; i < array.length; i++) {
        if (array[i] == guess) {
            document.getElementById('notification').innerHTML = `you have it already`

            return true;
        }
    }
    return false;

}

let feedBack = [`Yay, congrastulation. You make the right guess`, `Your guess is higher`, `Your guess is lower`]

let i = 0;
guess = () => {

    let yourGuess = parseInt(selectYourGuess.value);
    // check in here first the number is duplicate or not 
    if (checkAvailable(yourGuess, history) === true) {
        return;
    }
    if (remainingGuessCount > 0) {
        remainingGuessCount--;
        // console.log(remainingGuessCount)
        // checkAvailable(yourGuess, history)



        if ((yourGuess) === randomNumber) {
            insertToHistory(`${feedBack[0]} The number is ${randomNumber}`)
        } else if (yourGuess > randomNumber) {
            insertToHistory(feedBack[1])
        } else {
            insertToHistory(feedBack[2])
        }
    } else {
        insertToHistory(`You are out of guess!!!`)
    }
    selectRemainingGuess.innerHTML = remainingGuessCount;
    console.log("Random Number", randomNumber)

    // //push into array

    if (i < 5) {

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
    remainingGuessCount = 5;

    selectHistory.innerHTML = "";
    history.splice(0, 3)
    selectRemainingGuess.innerHTML = remainingGuessCount;

    insertToHistory(`Let's play a new game`)
    randomNumber = Math.round(Math.random() * 10);
    // timecounting()// fire the timecounting function!!
    time = 30;
}


let time = 30    // time start from 0
let myTime; // timer will be assign to this variable
function timecounting() {
    myTime = setInterval(() => {
        if (time > 0) {
            time--
            document.getElementById('timecount').innerHTML = time
        } else {
            document.getElementById('timecount').innerHTML = "Running out of time :(."
            remainingGuessCount = 0
            document.getElementById('remaining-guess').innerHTML = 0;

        }


    }, 1000)// every 1 second, it will add 1 into time variable (computer use millisecond so 1000 is 1 second)
}
timecounting()// fire the timecounting function!!