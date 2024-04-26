import WhiteWolf from "./factories/wolfFactories/whiteWolfFactory";
import BlackWolf from "./factories/wolfFactories/blackWolfFactory";
import BrownBear from "./factories/bearFactories/brownBearFactory";
import PolarBear from "./factories/bearFactories/polarBearFactory";

const pConsole = document.getElementById("p-console");
document.getElementById("button-wolf-creater").addEventListener('click', createWolf);
document.getElementById("button-bear-creater").addEventListener('click', createBear);
document.getElementById("button-show-animals").addEventListener('click', showAnimalCount);

let whiteWolfs = [];
let blackWolfs = [];
let brownBears = [];
let polarBears = [];
let animals = [whiteWolfs, blackWolfs, brownBears, polarBears];

function createWolf() {
  let wolf = Math.random() < 0.5 ? new WhiteWolf() : new BlackWolf();
  wolf instanceof WhiteWolf ? whiteWolfs.push(wolf) : blackWolfs.push(wolf);

  printMessage(wolf.stats());
}

function createBear() {
  let bear = Math.random() < 0.5 ? new BrownBear() : new PolarBear();
  bear instanceof BrownBear ? brownBears.push(bear) : polarBears.push(bear);

  printMessage(bear.stats());
}

function showAnimalCount() {
  const message = "<br><b>White Wolf Count: </b>" + whiteWolfs.length + 
    "<br><b>Black Wolf Count: </b>" + blackWolfs.length + 
    "<br><b>Brown Bear Count: </b>" + brownBears.length + 
    "<br><b>Polar Bear Count: </b>" + polarBears.length + "<br><br>";
  
  printMessage(message);
}

function printMessage(message) {
  pConsole.innerHTML += message;
  pConsole.scrollTop = pConsole.scrollHeight;
}