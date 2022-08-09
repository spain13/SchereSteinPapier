const schere = document.getElementById("Schere");
const stein = document.getElementById("Stein");
const papier = document.getElementById("Papier");
const game2 = [schere, stein, papier];

//zufallsprinizp implantieren
const min = 1;
const max = 4;
//const zufall = Math.floor( Math.random() * (max - min +1 )) +min

schere.addEventListener("click", () => {
  stein.checked = false;
  papier.checked = false;
});

stein.addEventListener("click", () => {
  schere.checked = false;
  papier.checked = false;
});

papier.addEventListener("click", () => {
  stein.checked = false;
  schere.checked = false;
});

const playbutton = document.getElementById("playbutton");
let wincounter = 0;
let losecounter = 0;
const wins = document.getElementById("wincounter");
const loses = document.getElementById("losecounter");
let result = document.querySelector("#ausgabe");
playbutton.addEventListener("click", () => {
  //if(schere.checked=true || stein.checked=true || papier.checked=true){
  const zufall = Math.floor(Math.random() * (max - min + 1)) + min;
  for (const signs of game2) {
    if (zufall <= 2) {
      result.innerText = "You Win!";
      wincounter++;
      wins.innerText = wincounter;
      return alert("Win");
    }
    if (zufall > 3) {
      result.innerText = "Lost!";
      losecounter++;
      loses.innerText = losecounter;
      return alert("Lost");
    }
    if (zufall <= 3 && zufall > 2) {
      result.innerText = "Its a Draw!";
      /*counter++
            thecounter.innerText = counter*/
      return alert("Draw");
    }
  }
  //}
});

const newgame = document.getElementById("newgame");
newgame.addEventListener("click", () => {
  wincounter = 0;
  losecounter = 0;
  wins.innerText = wincounter;
  loses.innerText = losecounter;
  result.innerText = "";
});
