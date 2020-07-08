let selectYourGuess = document.getElementById('yourGuess');
let selectHistory = document.getElementById('history')
//generate randomNumber
let randomNumber = Math.round(Math.random() * 10);
//remaining guess count
let remainingGuessCount = 3;
//reamining guess select
let selectRemainingGuess = document.getElementById('remaining-guess')
function insertToHistory(value) {
    selectHistory.innerHTML = value;
}

let feedBack = [`Yay, congrastulation. You make the right guess`, `Your guess is higher`, `Your guess is lower`]

guess = () => {
    selectRemainingGuess.innerHTML = remainingGuessCount;
    console.log(randomNumber)
    let yourGuess = parseInt(selectYourGuess.value);
    if (remainingGuessCount > 0) {

        // console.log(remainingGuessCount)
        if ((yourGuess) === randomNumber) {
            insertToHistory(`${feedBack[0]} The number is ${randomNumber}`)
        } else if (yourGuess > randomNumber) {
            insertToHistory(`Your guess is higher`)
        } else if (yourGuess < randomNumber) {
            insertToHistory(`Your guess is lower`)
        }
        remainingGuessCount--;
    } else {
        insertToHistory(`You are out of guess!!!`)
    }


}

reset = () => {
    selectRemainingGuess.innerHTML = remainingGuessCount;
    remainingGuess = 3;
    insertToHistory(`Let's play a new game`)
    randomNumber = Math.round(Math.random() * 10);

}