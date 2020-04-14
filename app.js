const game = ()=>{
    let playerScore = 0;
    let computerScore = 0;
    let name = '';
    
    const startGame = ()=>{
      const playBtn = document.querySelector('.intro button');
       const introScreen = document.querySelector('.intro');
       const match = document.querySelector('.match');
       playBtn.addEventListener('click',()=>{
         name = prompt("what's your name?")
         document.querySelector('.playerScore h1').textContent = name;
         introScreen.classList.add('fadeOut')
         match.classList.add('fadeIn')
       })
    };
   
    //game algo
    const playMatch = ()=>{
        const options = document.querySelectorAll('.options button')
        const playerHand = document.querySelector('.playerHand')
        const computerHand = document.querySelector('.computerHand')
        const computerOptions = ['rock','paper','scissors'];
         const handsStill =  document.querySelectorAll('.hands img') 
         handsStill.forEach(hand =>{
             hand.addEventListener('animationend' , function(){
                 this.style.animation  = '';
                 
             })
         })
        options.forEach(option=>{
             option.addEventListener('click', function(){
                  //random number genertions 
        const computerNumber =Math.floor(Math.random()* 3);
        const randomComputerChoice = computerOptions[computerNumber];
         // change images 

         setTimeout(()=>{
        playerHand.src =`./images/${this.textContent}.png`;
        computerHand.src=`./images/${randomComputerChoice}.png`
        compareHands(this.textContent, randomComputerChoice);
       
    },2000)
        //add animations 
        playerHand.style.animation = 'shakePlayerHand 2s ease'
        computerHand.style.animation = 'shakeComputerHand 2s ease'
        

             })
        })
    
    };
    //algo to increment the score 
    const incrementScore = ()=>{
        const pScore = document.querySelector('.playerScore p') ;
        const cScore = document.querySelector('.computerScore p');

        pScore.textContent = playerScore;
        cScore.textContent = computerScore;
    }

   // algo to check who is winning 
   const compareHands = (playerChoice, randomComputerChoice) =>{
       const winner = document.querySelector('.winner')
       //case1--> tie
      if(playerChoice === randomComputerChoice){
            winner.textContent = 'TIE'

            return;
      }
      //case2 -- > player chooses paper
      if(playerChoice === 'paper'){
          if(randomComputerChoice === 'rock'){
              winner.textContent = `${name} wins`
              playerScore++;
              incrementScore();
              return;
          }
          else{
              winner.textContent = "haha Math.random wins 🔥"
              computerScore++;
              incrementScore();
             return;
          }
      }

      //case3 player chooses rock
      if(playerChoice === 'rock'){
        if(randomComputerChoice === 'scissors'){
            winner.textContent = `${name} wins`
            playerScore++;
            incrementScore();
            return;
        }
        else{
            winner.textContent = "haha Math.random wins 🔥"
            computerScore++;
            incrementScore();
            return;
        }
    }
   //case4 player chooses scissors
    if(playerChoice === 'scissors'){
        if(randomComputerChoice === 'paper'){
            winner.textContent = `${name} wins `
            playerScore++;
            incrementScore();
            return;
        }
        else{
            winner.textContent = "haha Math.random wins 🔥"
            computerScore++;
            incrementScore();
           return;
        }
    }

   }
   
    startGame();
    playMatch();
}
game();