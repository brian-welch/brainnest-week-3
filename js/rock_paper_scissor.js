const onlyPossibleResponses = ['rock', 'paper', 'scissors']; // only three acceptible responses
const capitalize = (word) => {
    // for aethetics
    let temp = word.split('');
    return temp.shift().toUpperCase() + temp.join('');
}
const computerPlay = () => {
    // choose randomly 1 of the three acceptible responses
    return onlyPossibleResponses[Math.floor(Math.random() * 3)];
}
const dasher = (nameLength) => {
    let temp = '----';
    for (let i = 0; i < nameLength; i++) {
        temp += '-';
    }
    return temp;
}
const spacer = (spaceNumber) => {
    let temp ='';
    for (let i = 0; i < spaceNumber; i++) {
        temp += ' ';
    }
    return temp;
}

let roundCounter = 0, playerScore = 0, computerScore = 0;
let leftSpacer = '', rightSpacer = '', scorecardTable = '', hr = '';

const playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase();
    if (onlyPossibleResponses.indexOf(playerSelection) == -1) {
        // santitize the entry
        alert(`\n\n Sorry, but "${playerSelection}" is not a valid response.\n\nOnly 'rock', 'paper' or 'scissors' are acceptible.\n\n`);
        playRound(prompt('Make your move!:', '(rock, paper or scissors only)').toLowerCase(), computerPlay());
    } else if (playerSelection == computerSelection) {
        // check for a tie - no contest - do over
        alert(`\n\n Ooooo, you both chose "${capitalize(playerSelection)}". it's a push.\n\n You'll have to redo this round.\n\n`);
        playRound(prompt('Make your move!:', '(rock, paper or scissors only)').toLowerCase(), computerPlay());
    } else {
        roundCounter++;
        let result;
        switch (playerSelection) {
            case 'rock':
                result = computerSelection == 'paper' ? false : true;
                break;
            case 'paper':
                result = computerSelection == 'scissors' ? false : true;
                break;
            case 'scissors':
                result = computerSelection == 'rock' ? false : true;
                break;
            default:
                console.log(`If you are seeing this message, then Brian stinks at coding......`);
        }
        if (result) {
            playerScore++;
            scorecardTable += `|    ${roundCounter}    |${leftSpacer}X${rightSpacer}|                  |`;
            scorecardTable += `    ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}\n${hr}`;
        } else {
            computerScore++;
            scorecardTable += `|    ${roundCounter}    |${leftSpacer} ${rightSpacer}|        X         |`;
            scorecardTable += `    ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}\n${hr}`;
        }
    }
}

const game = () => {
    scorecardTable += `${hr}|  Round  |  ${playerName}  |  Master Control  |\n${hr}`;
    let directions = `\nWelcome ${playerName}!\n\nYour mission, if you decide to accept it, is to challenge
Master Control to a death match of Rock - Paper - Scissors.\n\nBest out of 5 rounds - ties rounds are replayed.
\nAre you OK with this challenge?`;
    if (!confirm(directions)) {
        console.log("\n\nSee you later chicken heart!\n\nMaybe next time.\n\n");
    } else {
        for (let i = 0; i < 5; i++) {
            playRound(prompt('Make your move!:', '(rock, paper or scissors only)').toLowerCase(), computerPlay());
            console.clear();
            console.log(scorecardTable);
            if (playerScore == 3 || computerScore == 3) {
                console.log(`\n\nWinner, winner chicken dinner!!\n\n`);
                console.log(`\n\n${playerScore > computerScore ? playerName : 'Master Control'} rises vitorious!!\n\n`);
                break;
            }
        }
    }
}


const playerName = capitalize(prompt('Please fill out your name:', '').toLowerCase());
leftSpacer = spacer(Math.floor(((playerName.length) + 3)/2));
rightSpacer = spacer(Math.ceil(((playerName.length) + 3)/2));
hr = `+---------+` + dasher(playerName.length) + `+------------------+\n`;


game();
