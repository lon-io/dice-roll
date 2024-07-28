let score = 0;

function resetGame() {
    rollDice(1);
}

function rollDice(inputValue) {
    const dice = document.getElementById('dice');
    const randomValue = inputValue ? inputValue : Math.floor(Math.random() * 6) + 1;
    let xRotation = 0;
    let yRotation = 0;

    switch (randomValue) {
        case 1:
            xRotation = 0;
            yRotation = 0;
            break;
        case 2:
            xRotation = 0;
            yRotation = 180;
            break;
        case 3:
            xRotation = 0;
            yRotation = -90;
            break;
        case 4:
            xRotation = 0;
            yRotation = 90;
            break;
        case 5:
            xRotation = -90;
            yRotation = 0;
            break;
        case 6:
            xRotation = 90;
            yRotation = 0;
            break;
    }

    dice.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
    // updateScore(randomValue);
}

// function updateScore(diceValue) {
//     // score += diceValue;
//     document.getElementById('score').textContent = score;
// }
