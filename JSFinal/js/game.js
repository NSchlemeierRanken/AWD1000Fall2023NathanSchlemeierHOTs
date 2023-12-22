function playGame() {
    var userChoice = document.getElementById('userChoice').value;
    var computerChoice = generateComputerChoice();
    var result = determineWinner(userChoice, computerChoice);

    document.getElementById('result').innerText = 'Result: ' + result;
    document.getElementById('computerChoice').innerText = computerChoice;
    updateScore(result);
    updateGameImage(computerChoice);

    setTimeout(clearGame, 5000);
}

function generateComputerChoice() {
    var choices = ['rock', 'paper', 'scissors'];
    var randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(user, computer) {
    if (user === computer) {
      return 'It\'s a tie!';
    } else if ((user === 'rock' && computer === 'scissors') ||
               (user === 'scissors' && computer === 'paper') ||
               (user === 'paper' && computer === 'rock')) {
      return 'You win!';
    } else {
      return 'Computer wins!';
    }
}

function updateScore(result) {
    var userWinsElement = document.getElementById('userWins');
    var computerWinsElement = document.getElementById('computerWins');

    if (result.includes('You win')) {
      userWinsElement.innerText = parseInt(userWinsElement.innerText) + 1;
    } else if (result.includes('Computer wins')) {
      computerWinsElement.innerText = parseInt(computerWinsElement.innerText) + 1;
    }
}

function clearGame() {
    document.getElementById('userChoice').value = 'rock';
    document.getElementById('result').innerText = 'Result: ';
    document.getElementById('computerChoice').innerText = '';
}