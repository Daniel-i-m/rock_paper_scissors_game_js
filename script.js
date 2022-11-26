/*
      Rock Paper Scissors ... GAME
##################################### */

function getComputerChoice(){
  const choices =['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * 3)];
}

/*
Getting variables from document
*/
const buttons = document.querySelectorAll('.btn');

const compChoiceDisplay = document.getElementsByClassName('choice')[0];
const userChoiceDisplay = document.getElementsByClassName('choice')[1];

const compPointsDisplay = document.getElementsByClassName('points')[0];
const userPointsDisplay = document.getElementsByClassName('points')[1];
const popUp = document.querySelector('.pop-up');
/*
Changing GUI Displays
 */
let compWin = 0;
let userWin = 0;
let compChoice;

function displays(choice, e){

  //To make first letter uppercase
  compChoiceDisplay.innerText = choice.slice(0,1).toUpperCase() + choice.slice(1);

  userChoiceDisplay.innerText = e.target.innerText;
  compPointsDisplay.innerText = compWin;
  userPointsDisplay.innerText = userWin;
};

function playRound(compSelection, playerSelection){

  if(compSelection === playerSelection){
    popUp.innerText = `It's draw game the computer also played ${compSelection}`;
  }
  
  else {
    switch (true){
      //User win cases
      case (compSelection === "rock" && playerSelection === "paper"):
      case (compSelection === "paper" && playerSelection === "scissors"):
      case (compSelection === "scissors" && playerSelection === "rock"):
        popUp.innerHTML = `<p> You won!! ${playerSelection} beats ${compSelection}!! </p>`;
        userWin++;
        break;

      //Computer win cases
      case (compSelection === "rock" && playerSelection === "scissors"):
      case (compSelection === "paper" && playerSelection === "rock"):
      case (compSelection === "scissors" && playerSelection === "paper"):
        popUp.innerHTML = `<p> You loose ${compSelection} beats ${playerSelection}!! </p>`;
        compWin++;
        break;
    }
  }
}

// FUNCTION TO PLAY 5 ROUNDS
function game(buttons){
  buttons.forEach(btn => {
    btn.addEventListener('click',e=>{
        compChoice = getComputerChoice();

        playRound(compChoice, e.target.innerText.toLowerCase());
        displays(compChoice, e);
        popUp.classList.remove('none');
        setTimeout(()=> popUp.classList.add('none'),1000);

        if(compWin === 5 || userWin === 5){
          
          let last = document.createElement('div');
          last.setAttribute('class','last flex');

          let finalRes = document.createElement('div');
          last.appendChild(finalRes);
          finalRes.classList.add('finals');

          document.body.appendChild(last);

          let confButton = document.createElement('button');
          confButton.classList.add('confirm');
          confButton.innerText = 'Confirm';

          confButton.onclick = ()=> location.reload();

          let cancButton = document.createElement('button');
          cancButton.classList.add('cancel');
          cancButton.innerText = 'Cancel';

          if(compWin == 5 && userWin < 5){
            cancButton.onclick = ()=>{
              last.style.display = 'none';
            };
            finalRes.innerHTML = '<p>You loose! Play Again?</p>';
            finalRes.append(confButton, cancButton);
          }
          if(userWin == 5 && compWin < 5){
            cancButton.onclick = ()=>{
              last.style.display = 'none';
            };
            finalRes.innerHTML = '<p>Congratulation! You Won.. Play Again?</p>';
            finalRes.append(confButton, cancButton);
          } else {
            finalRes.innerHTML = '<p>Play Again?</p>';
            finalRes.appendChild(confButton);
          }
        };
      });
  });
}
game(buttons);
