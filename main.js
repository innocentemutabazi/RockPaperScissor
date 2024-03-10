const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') { return userInput; }
    else {
        console.log('Error')
    }
}
console.log(getUserChoice('PAPER'));
console.log(getUserChoice('SCISSORS'));
console.log(getUserChoice('ScIssoRs'));
console.log(getUserChoice('Maman'));

const getComputerChoice = () => {
    const RandomNumber = (Math.floor(Math.random()*3));
    if (RandomNumber === 0){
        return 'rock';
    } else if (RandomNumber === 1){
        return 'paper';
    } else (RandomNumber === 2)
        return 'scissors'; 

}
console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) =>{
    if (userChoice === computerChoice){
        return 'The game is tie'
    } else if (userChoice === 'bomb'){
        return 'You won!'
    }
    else if (userChoice === 'rock'){
        if (computerChoice === 'paper'){
            return 'The computer won !'
        } else {
            return 'You Won!';
        }
    } else if (userChoice === 'paper'){
        if (computerChoice === 'scissors'){
            return 'The computer won !'
        } else { 
            return 'You Won!';
        }
    } else (userChoice === 'scissors')
        if (computerChoice === 'rock'){
            return 'The computer won !'
        } else { 
            return 'You Won!';
            }    
}
console.log(determineWinner('paper', 'scissors'));
console.log(determineWinner('paper', 'rock'));
console.log(determineWinner('scissors', 'scissors'));

const playGame = () => {
    const userChoice = getUserChoice('paper');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
};
playGame();
