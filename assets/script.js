const dice = document.querySelector(".dice");
const rollButton = document.getElementById("rollButton");
let lastRandomValue = 1;

const symmetricPairs = [2, 1, 4, 3, 6, 5];

rollButton.addEventListener("click", () => {
  rollDice();
});

function getNextRotation(input) {
  const randomValue = input ? input : Math.floor(Math.random() * 6) + 1;
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

  return {
    randomValue,
    xRotation,
    yRotation,
  };
}

function rollDice(override) {
  rollButton.disabled = true;
  let { randomValue, xRotation, yRotation } = getNextRotation(override);

  // If the same dice face is rolled, switch to it's symmetric pair to force an animation
  if (randomValue === lastRandomValue) {
    const symmetricRotation = getNextRotation(symmetricPairs[randomValue - 1]);
    randomValue = symmetricRotation.randomValue;
    xRotation = symmetricRotation.randomValue;
    yRotation = symmetricRotation.yRotation;
  }

  dice.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
  setTimeout(() => {
    // Enable button
    rollButton.disabled = false;
  }, 500);
  lastRandomValue = randomValue;
}
