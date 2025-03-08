const dice = document.querySelector('.dice');
const rollBtn = document.getElementById('roll-btn');

function rollDice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1; // Random number between 1 and 3
    const randomRotationX = Math.floor(Math.random() * 4) * 90; // Random rotation for X axis
    const randomRotationY = Math.floor(Math.random() * 4) * 90; // Random rotation for Y axis

    dice.style.transform = `rotateX(${randomRotationX}deg) rotateY(${randomRotationY}deg)`;

    // Ensure the dice always shows a number after the animation
    setTimeout(() => {
        dice.style.transform = `rotateX(${randomRotationX}deg) rotateY(${randomRotationY}deg)`;
    }, 1000);
}

rollBtn.addEventListener('click', rollDice);
