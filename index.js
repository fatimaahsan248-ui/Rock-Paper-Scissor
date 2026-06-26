let userScore=0;
let computerScore=0;

const choices = document.querySelectorAll(".choice");

const userChoiceText = document.getElementById("user-choice");
const computerChoiceText = document.getElementById("computer-choice");
const winnerText=document.getElementById("winner");

const userScoreText = document.getElementById("user-score");
 const computerScoreText = document.getElementById("computer-score");



 function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}




 function playGame(userChoice) {
    const computerChoice = getComputerChoice();
       


    userChoiceText.textContent = `Your Choice: ${userChoice}`;
    computerChoiceText.textContent = `Computer Choice: ${computerChoice}`;




    if(userChoice === computerChoice) {
        winnerText.textContent = "Its a draw!";
    }

    else if(
    (userChoice==="rock" && computerChoice ==="scissors") ||
     (userChoice==="paper" && computerChoice ==="rock") ||
      (userChoice==="scissors" && computerChoice ==="paper") 
    ) {
        winnerText.textContent = "You Win!" ;
        userScore ++;
    }
    else {
        winnerText.textContent = "Computer Wins!";
        computerScore ++;
    }
    userScoreText.textContent=userScore;
    computerScoreText.textContent=computerScore;

 }

 choices.forEach(button=> {
    button.addEventListener("click" , () => {
        playGame(button.id);
    });
 });
