const onlyPossibleResponses = ['rock', 'paper', 'scissors']; // only three acceptible responses
const scorecardResponses = {
    'rock': '  rock  ',
    'paper': ' paper  ',
    'scissors': 'scissors'
}

// I did try to figure out how to export this json object from another file, but it was taking too long
const signatureAlphabet = {
    "a":
        {
            0: "┌─┐",
            1: "├─┤",
            2: "┴ ┴"
        },
    "b":
        {
            0: "┌┐ ",
            1: "├┴┐",
            2: "└─┘"
        },
    "c":
        {
            0: "┌─┐",
            1: "│  ",
            2: "└─┘"
        },
    "d":
        {
            0: "┌┬┐",
            1: " ││",
            2: "─┴┘"
        },
    "e":
        {
            0: "┌─┐",
            1: "├┤ ",
            2: "└─┘"
        },
    "f":
        {
            0: "┌─┐",
            1: "├┤ ",
            2: "└  "
        },
    "g":
        {
            0: "┌─┐",
            1: "│ ┬",
            2: "└─┘"
        },
    "h":
        {
            0: "┬ ┬",
            1: "├─┤",
            2: "┴ ┴"
        },
    "i":
        {
            0: "┬",
            1: "│",
            2: "┴"
        },
    "j":
        {
            0: " ┬",
            1: " │",
            2: "└┘"
        },
    "k":
        {
            0: "┬┌─",
            1: "├┴┐",
            2: "┴ ┴"
        },
    "l":
        {
            0: "┬  ",
            1: "│  ",
            2: "┴─┘"
        },
    "m":
        {
            0: "┌┬┐",
            1: "│││",
            2: "┴ ┴"
        },
    "n":
        {
            0: "┌┐┌",
            1: "│││",
            2: "┘└┘"
        },
    "o":
        {
            0: "┌─┐",
            1: "│ │",
            2: "└─┘"
        },
    "p":
        {
            0: "┌─┐",
            1: "├─┘",
            2: "┴  "
        },
    "q":
        {
            0: "┌─┐ ",
            1: "│─┼┐",
            2: "└─┘└"
        },
    "r":
        {
            0: "┬─┐",
            1: "├┬┘",
            2: "┴└─"
        },
    "s":
        {
            0: "┌─┐",
            1: "└─┐",
            2: "└─┘"
        },
    "t":
        {
            0: "┌┬┐",
            1: " │ ",
            2: " ┴ "
        },
    "u":
        {
            0: "┬ ┬",
            1: "│ │",
            2: "└─┘"
        },
    "v":
        {
            0: "┬  ┬",
            1: "└┐┌┘",
            2: " └┘ "
        },
    "w":
        {
            0: "┬ ┬",
            1: "│││",
            2: "└┴┘"
        },
    "x":
        {
            0: "─┐ ┬",
            1: "┌┴┬┘",
            2: "┴ └─"
        },
    "y":
        {
            0: "┬ ┬",
            1: "└┬┘",
            2: " ┴ "
        },
    "z":
        {
            0: "┌─┐",
            1: "┌─┘",
            2: "└─┘"
        },
    "ä":
        {
            0: "┌─┐",
            1: "├─┤",
            2: "┴ ┴"
        },
    "å":
        {
            0: "┌─┐",
            1: "├─┤",
            2: "┴ ┴"
        },
    "ø":
        {
            0: "┌─┐",
            1: "│ │",
            2: "└─┘"
        },
    "ö":
        {
            0: "┌─┐",
            1: "│ │",
            2: "└─┘"
        },
    "æ":
        {
            0: "┌─┐┌─┐",
            1: "├─┤├┤ ",
            2: "┴ ┴└─┘"
        }
}

const mastControlsignature =`
┌┬┐┌─┐┌─┐┌┬┐┌─┐┬─┐  ┌─┐┌─┐┌┐┌┌┬┐┬─┐┌─┐┬  
│││├─┤└─┐ │ ├┤ ├┬┘  │  │ ││││ │ ├┬┘│ ││  
┴ ┴┴ ┴└─┘ ┴ └─┘┴└─  └─┘└─┘┘└┘ ┴ ┴└─└─┘┴─┘`;

let playerScore = 0, computerScore = 0;

let leftSpacer = '', rightSpacer = '', scorecardTable = '', hr = '';

const replay = () => { window.location.reload(); }

const playerSignature = (playerName) => {
    let temp = '';
    let letters = playerName.trim().toLowerCase().split('');
    for (let i = 0; i < 3; i++) {
        letters.forEach((letter) => {
            signatureAlphabet[letter] ? temp += signatureAlphabet[letter][i] : temp += '  ' ;
        });
        temp += '\n';
    }
    temp += '\n';
    return temp;
}

const capitalizeWord = (word) => {
    // for aethetics
    let temp = word.split('');
    return temp.shift().toUpperCase() + temp.join('');
}

const capitalize = (entry) => {
    let temp = '';
    let words = entry.split(' ');
    words.forEach((word) => {
        temp += capitalizeWord(word) + ' ';
    });
    return temp.trim();
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

const playRound = (playerSelection, computerSelection, roundNumber) => {
    playerSelection = playerSelection.toLowerCase();
    if (onlyPossibleResponses.indexOf(playerSelection) == -1) {
        // santitize the entry
        alert(`\n\n Sorry, but "${playerSelection}" is not a valid response.\n\nOnly 'rock', 'paper' or 'scissors' are acceptible.\n\n`);
        playRound(prompt('\nMake your move!:\n', '').toLowerCase(), computerPlay(), roundNumber);
    } else if (playerSelection == computerSelection) {
        // check for a tie - no contest - do over
        alert(`\n\n OK - You both chose "${capitalize(playerSelection)}" ~> It's a tie.\n\n You'll have to redo round ${roundNumber}.\n\n`);
        playRound(prompt('\nMake your move!:\n', '').toLowerCase(), computerPlay(), roundNumber);
    } else {
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
            scorecardTable += `|    ${roundNumber}    |${leftSpacer}${scorecardResponses[playerSelection]}${rightSpacer}|     ${scorecardResponses[computerSelection]}     |`;
            scorecardTable += `    This round goes to: ${playerName.trim()}!\n${hr}`;
        } else {
            computerScore++;
            scorecardTable += `|    ${roundNumber}    |${leftSpacer}${scorecardResponses[playerSelection]}${rightSpacer}|     ${scorecardResponses[computerSelection]}     |`;
            scorecardTable += `    This round goes to: Master Control!\n${hr}`;
        }
    }
}

const game = () => {
    scorecardTable += `${hr}|  Round  |  ${playerName}  |  Master Control  |\n${hr}`;
    let directions = `\nWelcome ${playerName.trim()}!\n\nYour mission, if you decide to accept it, is to challenge
Master Control to a death match of Rock - Paper - Scissors.\n\nBest out of 5 rounds - ties rounds are replayed.
\nAre you OK with this challenge?`;
    if (!confirm(directions)) {
        console.log("\n\nSee you later chicken heart!\n\nMaybe next time.\n\n");
    } else {
        for (let i = 0; i < 5; i++) {
            playRound(prompt('\nMake your move!:\n', '').toLowerCase(), computerPlay(), i + 1);
            console.clear();
            console.log(scorecardTable);
            if (playerScore == 3 || computerScore == 3) {
                console.log(`\n\nTHE WINNER IS:\n-~-~-~-~-~-~-~-
${playerScore > computerScore ? playerSignature(playerName) : mastControlsignature}\n\nEnter ' replay() ' in the console to play again\n\n`);
                break;
            }
        }
    }
}

const namePadder = (nameInput) => {
    let nameLength = nameInput.length;
    if (nameInput.length < 8) {
        let leftPad = Math.floor((8 - nameLength)/2);
        let rightPad = Math.ceil((8 - nameLength)/2);
        for (let i = 0; i < leftPad; i++) { nameInput = nameInput.replace(/^/," "); }
        for (let i = 0; i < rightPad; i++) { nameInput = nameInput.replace(/$/," "); }
    }
    return nameInput;
}

const nameInput = capitalize(prompt('\n\nPlease fill out your name:\n\n', '').toLowerCase()); // .split(' ')[0]);

const playerName = namePadder(nameInput);

leftSpacer = spacer(Math.floor(((playerName.length) - 4)/2));

rightSpacer = spacer(Math.ceil(((playerName.length) - 4)/2));

hr = `+---------+` + dasher(playerName.length) + `+------------------+\n`;

game();
