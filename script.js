'use strict';
//Create a secret number
let secretNumber = Math.trunc(Math.random()*20) + 1;
console.log(secretNumber);

//Set original score and highscore for the beginning of the game
let score = 20;
let highScore = 0;

//Uncomment to Show the CORRECT number for testing in the number section
// document.querySelector('.number').textContent = secretNumber;


document.querySelector('.check').addEventListener('click', ()=>{
    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess, guess, secretNumber);
    
    //When there is no number   
    if (!guess){
        document.querySelector('.message').textContent = '⛔ No Number!';
        score--;
        document.querySelector('.score').textContent = score;
      //When the answer is correct   
    } else if (guess === secretNumber) {
        secretNumber = Math.trunc(Math.random()*20) + 1;
        document.querySelector('.number').textContent = '?';
        document.querySelector('.message').textContent = 'Correct Number King 🤴🏽!!';
        highScore++;
        document.querySelector('.highscore').textContent = highScore;
        document.querySelector('body').style.backgroundColor = '#4CBB17';
        document.querySelector('.number').style.width = '30rem';
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

      //When the number is too big   
    } else if (guess > secretNumber ){
        if (score > 1) {
            document.querySelector('.message').textContent = 'Number too high! 📈'; 
            score--;
            console.log(score);
            document.querySelector('.score').textContent = score;
            document.querySelector('body').style.backgroundColor = '#222';
            document.querySelector('.number').style.width = '15rem';

        } else {
            document.querySelector('.message').textContent = 'You lost the game!💥'; 
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = '#D2042D';

        }
      //When the number is too small   
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Number too low! 📉'; 
            score--;
            console.log(score);
            document.querySelector('.score').textContent = score;
            document.querySelector('body').style.backgroundColor = '#222';
            document.querySelector('.number').style.width = '15rem';

        } else {
            document.querySelector('.message').textContent = 'You lost the game!💥'; 
            document.querySelector('.score').textContent = 20;
            document.querySelector('body').style.backgroundColor = '#D2042D';
        }
    }
})


document.querySelector('.again').addEventListener('click', ()=>{
    secretNumber = Math.trunc(Math.random()*20) + 1;
    score = 20;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').textContent = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})


