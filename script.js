
let userScore = 0;
let computerScore = 0;
const rockBtn = document.querySelector('#buttons .rock');
rockBtn.addEventListener('click',rockPlay);

const paperBtn = document.querySelector('#buttons .paper ' );
paperBtn.addEventListener('click',paperPlay);

const scissorsBtn = document.querySelector('#buttons .scissors');
scissorsBtn.addEventListener('click', scissorsPlay);

const againBtn = document.querySelector('#again');
againBtn.addEventListener('click', reset);





const user = document.querySelector('#scores .user .userResult');
const computer = document.querySelector('#scores .computer .computerResult');
const current = document.querySelector('#resultStatement .current');
const final = document.querySelector('#resultStatement .final');





// user playing the rock button 
function rockPlay(){

    let computerChoice = computerPlay();
    console.log('computer play: ' +computerChoice);
    if (computerChoice == 'scissors'){
        userScore++;
        console.log('User Score: '+userScore);
        console.log('Computer Score: ' +computerScore);
        console.log('rock beats scissors');
        current.textContent = 'rock beats scissors';
        user.textContent = userScore;
        checkWinner();

    }

    else if (computerChoice == 'paper' ){
        computerScore++;
        console.log('User Score: '+userScore);
        console.log('Computer Score: ' +computerScore);
        console.log('paper beats rock');
        current.textContent = 'paper beats rock';
        computer.textContent = computerScore;
        checkWinner();

    }

    else if (computerChoice == 'rock'){
        console.log('User Score: '+userScore);
        console.log ('Computer Score: '+computerScore);
        current.textContent = 'Tie';
        console.log('Tie');
        checkWinner();
    
    }
}

function paperPlay(){

    let computerChoice = computerPlay();
    console.log('computer play: ' +computerChoice);
    if (computerChoice == 'scissors'){
        computerScore++;
        console.log('User Score: '+userScore);
        console.log('Computer Score: ' +computerScore);
        console.log('scissors beats paper');
        current.textContent = 'scissors beats paper';
        computer.textContent = computerScore;
        checkWinner();

    }

    else if (computerChoice == 'rock' ){
        userScore++;
        console.log('User Score: '+userScore);
        console.log('Computer Score: ' +computerScore);
        console.log('paper beats rock');
        current.textContent = 'paper beats rock';
        user.textContent = userScore;
        checkWinner();

    }

    else if (computerChoice == 'paper'){
        console.log('User Score: '+userScore);
        console.log ('Computer Score: '+computerScore);
        current.textContent = 'Tie';
        console.log('Tie');
        checkWinner();

    }
}

function scissorsPlay(){

    let computerChoice = computerPlay();
    console.log('computer play: ' +computerChoice);
    if (computerChoice == 'rock'){
        computerScore++;
        console.log('User Score: '+userScore);
        console.log('Computer Score: ' +computerScore);
        console.log('rock beats scissors');
        current.textContent = 'rock beats scissors';
        computer.textContent = computerScore;
        checkWinner();

       
    }

    else if (computerChoice == 'paper' ){
        userScore++;
        console.log('User Score: '+userScore);
        console.log('Computer Score: ' +computerScore);
        console.log('scissors beats paper');
        current.textContent = 'scissors beats paper';
        user.textContent = userScore;
        checkWinner();

    }

    else if (computerChoice == 'scissors'){
        console.log('User Score: '+userScore);
        console.log ('Computer Score: '+computerScore);
        current.textContent = 'Tie';
        console.log('Tie');
        checkWinner();

    }
}

function computerPlay(){
           let randomNumber = Math.floor(Math.random() * 3);

           if (randomNumber === 0){
               return 'rock';
           }
           else if (randomNumber == 1){
               return 'paper';
           }
           else if (randomNumber == 2){
               return 'scissors'
           } 
       }


       function checkWinner () {

        if (userScore == 5){
            final.textContent = 'You Won, It\'s your lucky day';;
            userScore = 0;
            computerScore =0;
            user.textContent = '0';
            computer.textContent ='0';
            rockBtn.setAttribute('disabled','disabled');
            paperBtn.setAttribute('disabled','disabled');
            scissorsBtn.setAttribute('disabled','disabled');


        }
        else if (computerScore == 5){
            final. textContent = 'You Lost,  Good luck next time';
            userScore = 0;
            computerScore =0;
            user.textContent = '0';
            computer.textContent ='0';
            rockBtn.setAttribute('disabled','disabled');
            paperBtn.setAttribute('disabled','disabled');
            scissorsBtn.setAttribute('disabled','disabled');
        }
       }
    
       function reset(){
           current.textContent = '';
        console.log(final.textContent = '');
        rockBtn.removeAttribute('disabled');
            paperBtn.removeAttribute('disabled');
            scissorsBtn.removeAttribute('disabled');
       }

