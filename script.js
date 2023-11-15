console.log("connecting with script js")

const localEl = document.getElementById("local-box")
const remoteEl = document.getElementById("remote-box")
const rookieDetectiveEl = document.getElementById("rookie-box")
const compDetectiveEl = document.getElementById("comp-box")
const bostonBlackieMainEl = document.getElementById("boston-blackie-main")
const bbEl = document.getElementById("bb")
const assignedCaseNumEl = document.getElementById("assigned-case-num")
const warrantCaseNumEl = document.getElementById("warrant-case-number")
const playerOneNameEl = document.getElementById("player-1-name")
const selectionIndEl = document.getElementById("selection-indicator")

let caseNum = 0;
let playerOneName = "One";
let playerTwoName = "Two";


localEl.addEventListener("click", function(){
  selectionIndEl.style.transform = "rotate(-140deg)";
  names("L");
});


remoteEl.addEventListener("click", function(){
  selectionIndEl.style.transform = "rotate(-110deg)";
  names("Re");
});

rookieDetectiveEl.addEventListener("click", function(){
  selectionIndEl.style.transform = "rotate(-70deg)";
  names("R");
});

compDetectiveEl.addEventListener("click", function(){
  selectionIndEl.style.transform = "rotate(-40deg)";
  names("C");
});

function names(sel){
  bbEl.style.transform = "rotate(195deg) skewY(-60deg)";
  assignedCaseNumEl.innerText = "";

  const namesTextEl = document.getElementById("names-text")
  if (sel === "L"){
    namesTextEl.innerText = "ENTER YOUR NAME and Rookies name"
  }  
  if (sel === "Re"){
    namesTextEl.innerText = "ENTER YOUR NAME your opponents name and the Case#"
  }  
  if (sel === "R"){
    namesTextEl.innerText = "ENTER YOUR NAME and Lead Detectives name"
  }  
  if (sel === "C"){
    namesTextEl.innerText = "ENTER YOUR NAME"
  }  
}



bbEl.addEventListener("click", function(){
  bbEl.style.transform = "rotate(135deg) skewY(-60deg)";
   setTimeout(function () {
    caseNum = (Math.floor(Math.random() * 10000)) + 1;
    assignedCaseNumEl.innerText = caseNum;
    warrantCaseNumEl.innerText = "#" + caseNum
    playerOneNameEl.innerText = playerOneName;
}, 1250);


});