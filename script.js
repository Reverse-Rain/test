// Chat functionality
function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const chatMessages = document.getElementById('chatMessages');
    const message = messageInput.value.trim();

    if (message !== '') {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);
        messageInput.value = '';
    }
}

// Game functionality
function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const guessResult = document.getElementById('guessResult');
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        guessResult.textContent = 'Please enter a number between 1 and 100.';
    } else if (guess === randomNumber) {
        guessResult.textContent = `Congratulations! You guessed the number ${randomNumber} correctly!`;
    } else {
        guessResult.textContent = `Sorry, the number was ${randomNumber}. Try again!`;
    }
    guessInput.value = '';
}
