let homeScore = 0;
let scoreHome = document.getElementById('score-home');

function plusOne() {

 homeScore = homeScore + 1; 
 scoreHome.textContent = homeScore;

}


function plusTwo() {
    
    homeScore = homeScore + 2; 
    scoreHome.textContent = homeScore;
  
}

function plusThree() {
    
    homeScore = homeScore + 3;
    scoreHome.textContent = homeScore;
  
  }

let awayScore = 0
let scoreAway = document.getElementById('score-away');

function plusOneAway() {

    awayScore = awayScore + 1; 
    scoreAway.textContent = awayScore;

}

function plusTwoAway() {

    awayScore = awayScore + 2; 
    scoreAway.textContent = awayScore;
    
}
function plusThreeAway() {

    awayScore= awayScore + 3; 
    scoreAway.textContent = awayScore;
    
}