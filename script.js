let userSelect;
let userScore = 0;
let cpuScore = 0;

let container = document.querySelector(".container");
let h2GameState = document.createElement("h2");
let h2ComputerChoice = document.createElement("h2");
let userScoreDom = document.createElement("h3");
let cpuScoreDom = document.createElement("h3");
let endText = document.createElement("h3");
container.appendChild(h2ComputerChoice);
container.appendChild(h2GameState);
container.appendChild(userScoreDom);
container.appendChild(cpuScoreDom);
container.appendChild(endText);

//function that generates the computers choice
computerPlay = () => {
  let cpuResult;
  min = Math.ceil(1);
  max = Math.floor(3);
  computerNum = Math.floor(Math.random() * (max - min + 1) + min);
  if (computerNum == 3) {
    cpuResult = "scissors";
    console.log(`computer has chosen scissors`);
  } else if (computerNum == 2) {
    cpuResult = "paper";
    console.log(`computer has chosen paper`);
  } else if (computerNum == 1) {
    cpuResult = "rock";
    console.log(`computer has chosen rock`);
  }
  return cpuResult;
};

let computed = computerPlay();

//function allowing user to input choice

document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let choice = e.target.textContent.toLowerCase();
    console.log(`user has chosen ${choice}`);
    game2(computed, choice);
    computed = computerPlay();
  });
});

//logic of game, ie paper beats rock

game2 = (computed, choice) => {
  if (computed == choice) {
    h2ComputerChoice.innerText = `The computer has chosen ${computed}`;
    h2GameState.textContent = "Game is a tie";
  } else if (computed == "rock" && choice == "paper") {
    userScore++;
    userScoreDom.innerText = `The user has ${userScore} points`;
    h2ComputerChoice.innerText = `The computer has chosen ${computed}`;
    h2GameState.textContent = "User wins, paper beats rock";
  } else if (computed == "paper" && choice == "rock") {
    cpuScore++;
    cpuScoreDom.innerText = `The cpu has ${cpuScore} points`;
    h2ComputerChoice.innerText = `The computer has chosen ${computed}`;
    console.log("CPU wins, paper beats rock");
    h2GameState.textContent = "CPU wins, paper beats rock";
  } else if (computed == "paper" && choice == "scissors") {
    userScore++;
    userScoreDom.innerText = `The user has ${userScore} points`;
    h2ComputerChoice.innerText = `The computer has chosen ${computed}`;
    console.log("User wins, scissors beats paper");
    h2GameState.textContent = "User wins, scissors beats paper";
  } else if (computed == "scissors" && choice == "paper") {
    cpuScore++;
    cpuScoreDom.innerText = `The cpu has ${cpuScore} points`;
    h2ComputerChoice.innerText = `The computer has chosen ${computed}`;
    console.log("CPU wins, scissors beats paper");
    h2GameState.textContent = "CPU wins, scissors beats paper";
  } else if (computed == "scissors" && choice == "rock") {
    userScore++;
    userScoreDom.innerText = `The user has ${userScore} points`;
    h2ComputerChoice.innerText = `The computer has chosen ${computed}`;
    console.log("User wins, rock beats scissors");
    h2GameState.textContent = "User wins, rock beats scissors";
  } else if (computed == "rock" && choice == "scissors") {
    cpuScore++;
    cpuScoreDom.innerText = `The cpu has ${cpuScore} points`;
    h2ComputerChoice.innerText = `The computer has chosen ${computed}`;
    console.log("CPU wins, rock beats scissors");
    h2GameState.textContent = "CPU wins, rock beats scissors";
  }
  console.log(`User score is ${userScore}`);
  console.log(`CPU score is ${cpuScore}`);
  if(userScore === 5){
    endText.textContent = `The User has 5 points, you win!`
  }else if(cpuScore === 5){
    endText.textContent = `The Computer has 5 points, you lose!`

  }
};
