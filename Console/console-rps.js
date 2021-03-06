

        /* computerPlay function returns a string rockpapeerscissors 
        based on a random generated number from 0 to 2*/
       function computerPlay(){
           let randomNumber = Math.floor(Math.random() * 3);

           if (randomNumber === 0){
               return 'rock';
           }
           else if (randomNumber == 1){
               return 'paper';
           }
           else {
               return 'scissors'
           } 
       }
 
       /* playRound function takes two arguments one from the user and the 
       other from the computer and then test these two inputs with each other
       using a series of if statements, then it returns 1 if won the round and 0 if
        you lost the round*/
       function playRound(playerSelection, computerSelection){
           let playerCaseSensitive = playerSelection.toLowerCase();
            if (playerCaseSensitive === 'rock' && computerSelection === 'scissors'){
                let resultStr = 'You Win! Rock beats Scissors';
                console.log(resultStr);
                return 1;
            }

            else if (playerCaseSensitive === 'paper' && computerSelection === 'rock'){
                let resultStr = 'You Win! Paper beats Rock';
                console.log(resultStr);
                return 1;
            }

            else if (playerCaseSensitive === 'scissors' && computerSelection === 'paper'){
                let resultStr = 'You Win! Scissors beats Paper';
                console.log(resultStr);
                return 1;
            }

            else if (playerCaseSensitive === 'rock' && computerSelection === 'paper'){
                let resultStr = 'You Lose! Paper beats Rock';
                console.log(resultStr);
                return 0;
            }

            else if (playerCaseSensitive === 'paper' && computerSelection === 'scissors'){
                let resultStr = 'You Lose! Scissors beats Paper';
                console.log(resultStr);
                return 0;
            }

            else if (playerCaseSensitive === 'scissors' && computerSelection === 'rock'){
                let resultStr = 'You Lose! Rock beats Scissors';
                console.log(resultStr);
                return 0;
            }

            else {
                console.log('Tie');
                return 'Tie';
            }
           }
           /* game function plays the game through 5 rounds using a for loop
           taking the inputs from the user and computer then count the score
           for each one and compare them to return a string to declare the winner*/
           function game (){
              let userScore = 0;
              let computerScore = 0;
              for (let i =0; i<=4; i++ ){
              let player = prompt('Enter your play:');
              let computer = computerPlay();
              let resultRound = playRound(player,computer);   
              if (resultRound == 1 ){
                userScore++;
              }
              else if (resultRound == 0){
                computerScore++; 
              }
            }
            
                console.log(userScore);
                console.log(computerScore);
              if(userScore > computerScore){
                  let finalResult = 'You are the Winner!';
                  return finalResult;
              }
              else if (computerScore > userScore){
                  let finalResult = 'You Lost';
                  return finalResult;
              }

              else if (computerScore == userScore){
                  let finalResult = 'Tie';
                  return finalResult;
              }
           }
           console.log(game());