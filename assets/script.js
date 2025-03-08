const dice = document.querySelector(".dice");
const rollButton = document.getElementById("rollButton");

rollButton.addEventListener("click", () => {
  rollDice();
});

function rollDice() {
  // const dice = document.getElementById('dice');
  const randomValue = Math.floor(Math.random() * 6) + 1;
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

  const randomRotationX = Math.floor(Math.random() * 3600);
  const randomRotationY = Math.floor(Math.random() * 3600);

  // Roll
  dice.style.transform = `rotateX(${randomRotationX}deg) rotateY(${randomRotationY}deg)`;

  setTimeout(() => {
    // Set
    dice.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
  }, 500);
}
