/* *************************

      Rock Paper Scissors ... GAME

  ************************* */


// to get computer choice
function getComputerChoice(){
  const choice = Math.floor (Math.random() * 3);

  switch (choice) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
};

// single round of gamePlay!

function playRound(compSelection, playerSelection){
  if(compSelection === playerSelection){
    return [3,`It's draw game the computer also played ${compSelection}`];
  }
  
  else {
    switch (true){
      case (compSelection === "rock" && playerSelection === "paper"):
            return [1,`You won ${playerSelection} beats ${compSelection}!!`];
      case (compSelection === "paper" && playerSelection === "scissors"):
            return [1,`You won ${playerSelection} beats ${compSelection}!!`];
      case (compSelection === "scissors" && playerSelection === "rock"):
            return [1,`You won ${playerSelection} beats ${compSelection}!!`];
        break;
      case (compSelection === "rock" && playerSelection === "scissors"):
            return [2,`You loose ${compSelection} beats ${playerSelection}!!`];
      case (compSelection === "paper" && playerSelection === "rock"):
            return [2,`You loose ${compSelection} beats ${playerSelection}!!`];
      case (compSelection === "scissors" && playerSelection === "paper"):
            return [2,`You loose ${compSelection} beats ${playerSelection}!!`];
        break;
      default:
        return [3,"You Entered Wrong selection!"];
        break;
    }
  }
}

// function to play 5 rounds
function game(rounds){
  let compWin= 0;
  let userWin = 0;

  for(let i=0; i<5; i++){

    // getting user choice
  let userChoice = prompt("Enter Your Choice");
      userChoice = userChoice.toLowerCase();

  rounds = playRound(getComputerChoice(), userChoice);
  
  const [digit, text] = rounds;

  if(digit === 1){
  userWin++;
  console.log(text);
}

  else if(digit === 2){
  compWin++;
  console.log(text);
} 

  else {
    console.log(text);
}
}

if(userWin > compWin){
  alert("You Won! Congratulations");
} 
else if(userWin == compWin){
  alert("!! It's Draw Game");
}
else {
  confirm("You Lost! But can still try..."+"\n"+"Try again??");
  if(true){
    game();
  }
}
}
game();
