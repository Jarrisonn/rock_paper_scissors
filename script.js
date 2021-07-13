let userSelect;
let userScore = 0;
let cpuScore = 0;

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
    console.log("Tie");
  } else if (computed == "rock" && choice == "paper") {
    userScore++;
    console.log("User wins, paper beats rock");
  } else if (computed == "paper" && choice == "rock") {
    cpuScore++;
    console.log("CPU wins, paper beats rock");
  } else if (computed == "paper" && choice == "scissors") {
    userScore++;
    console.log("User wins, scissors beats paper");
  } else if (computed == "scissors" && choice == "paper") {
    cpuScore++;
    console.log("CPU wins, scissors beats paper");
  } else if (computed == "scissors" && choice == "rock") {
    userScore++;
    console.log("User wins, rock beats scissors");
  } else if (computed == "rock" && choice == "scissors") {
    cpuScore++;
    console.log("CPU wins, rock beats scissors");
  }
  console.log(`User score is ${userScore}`);
  console.log(`CPU score is ${cpuScore}`);
};

/*
game = (cpuResult, userSelect) => {
  if (cpuResult == userSelect) {
    console.log("Tie");
  } else if (cpuResult == "rock" && userSelect == "paper") {
    userScore++;
    console.log("User wins, paper beats rock");
  } else if (cpuResult == "paper" && userSelect == "rock") {
    cpuScore++;
    console.log("CPU wins, paper beats rock");
  } else if (cpuResult == "paper" && userSelect == "scissors") {
    userScore++;
    console.log("User wins, scissors beats paper");
  } else if (cpuResult == "scissors" && userSelect == "paper") {
    cpuScore++;
    console.log("CPU wins, scissors beats paper");
  } else if (cpuResult == "scissors" && userSelect == "rock") {
    userScore++;
    console.log("User wins, rock beats scissors");
  } else if (cpuResult == "rock" && userSelect == "scissors") {
    cpuScore++;
    console.log("CPU wins, rock beats scissors");
  }
  console.log(`User score is ${userScore}`);
  console.log(`CPU score is ${cpuScore}`);
};
*/

/*
//play 5 games
playGame = () => {
  //calls other methods in a loop to create multiple games

  computerPlay();
  userPlay(cpuResult);
  game(cpuResult, userSelect);

  if (userScore > cpuScore) {
    console.log(
      `The user wins scoring ${userScore} and the cpu loses scoring ${cpuScore}`
    );
  } else if (cpuScore > userScore) {
    console.log(
      `The user loses scoring ${userScore} and the cpu wins scoring ${cpuScore}`
    );
  } else {
    console.log(`the game is a tie with cpu and user scoring ${userScore}`);
  }
};
*/

/*Add an event listener to the buttons that calls your playRound function with the correct 
playerSelection every time a button is clicked. 
(you can keep the console.logs for this step)*/

/*btn.addEventListener("click", e => {

console.log(e.target);
})
*/

