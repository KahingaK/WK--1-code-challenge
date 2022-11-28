// SPEED DETECTOR
// Interface that asks user for input
let prompt = require("prompt-sync")()
let inputSpeed = prompt('Input speed', "inputSpeed")
inputSpeed = parseInt(inputSpeed)

// Calcutates demerit points and awards demerit points.
function demeritPoints(inputSpeed) {
  const points = (inputSpeed - 70) / 5;
  if (inputSpeed > 0 && inputSpeed <= 70) {
    console.log("Ok!");
  } else if (inputSpeed > 70 && points <= 12) {
    console.log("Points:" + points);
  } else if (points > 12) {
    console.log("LICENSE SUSPENDED");
  }
}

demeritPoints(inputSpeed);
