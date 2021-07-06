let cpuResult;
let userSelect;
let userScore = 0;
let cpuScore = 0;
//function that generates the computers choice
computerPlay = () => {
    
    min = Math.ceil(1);
    max = Math.floor(3);
    computerNum = Math.floor(Math.random() * (max - min + 1) + min);
    if (computerNum == 3) {
        cpuResult = "scissors";
    } else if (computerNum == 2) {
        cpuResult = "paper"
    } else if (computerNum == 1) {
        cpuResult = "rock"
    }
    return cpuResult;
}

//function allowing user to input choice
userPlay = cpuResult => {
    userSelect = window.prompt("Select Rock, Paper or Scissors");
    userSelect = userSelect.toLowerCase();
    console.log(`the user has selected ${userSelect}`);
    console.log(`the computer has selected ${cpuResult}`);
    return userSelect;
}
//logic of game, ie paper beats rock
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


//play 5 games
playGame = () =>{
    //calls other methods in a loop to create multiple games
    for(let i = 0; i < 5; i++){
        computerPlay();
        userPlay(cpuResult);
        game(cpuResult, userSelect);
    }
    if(userScore > cpuScore){
        console.log(`The user wins scoring ${userScore} and the cpu loses scoring ${cpuScore}`);
    }else if(cpuScore > userScore){
        console.log(`The user loses scoring ${userScore} and the cpu wins scoring ${cpuScore}`);
    }else{
        console.log(`the game is a tie with cpu and user scoring ${userScore}`);
    }
}

playGame();
