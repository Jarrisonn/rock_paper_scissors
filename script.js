let result;
computerPlay = () => {
    
    min = Math.ceil(1);
    max = Math.floor(3);
    computerNum = Math.floor(Math.random() * (max - min + 1) + min);
    if (computerNum == 3) {
        result = "Scissors";
    } else if (computerNum == 2) {
        result = "Paper"
    } else if (computerNum == 1) {
        result = "Rock"
    }
    return result;
}


userPlay = result => {
    let userSelect = window.prompt("Select Rock, Paper or Scissors");
    userSelect = userSelect.toLowerCase();
    console.log(`the user has selected ${userSelect}`);
    console.log(`the computer has selected ${result}`);
}

game = () => {
    
    

}
computerPlay();
userPlay(result);
