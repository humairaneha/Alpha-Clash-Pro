 //handleKeyPress is a callback function
let score=0;
let life=3;
function resetScoreAndLife(){
    score=0;
    life=3;
    setScore(score);
    setLife(life);
}
function playAgain(){
    hideElementById('score');
    resetScoreAndLife();
    showElementById('playground');
    gameLoop();
}
function gameOver(score){
    hideElementById('playground');
    showElementById('score');
    document.removeEventListener('keyup', handleKeyPress ); //handleKeyPress is a callback function
    
}
function handleKeyPress(event){
const playScreen = document.getElementById('play-screen');
const playerPressed=event.key.toLowerCase();
const expectedKey = playScreen.innerText.toLowerCase().toString();
removeBgColorById(expectedKey,'bg-[#FFA500]');
if(playerPressed===expectedKey){
    score=score+1; // increment score
    setScore(score); //update score
    gameLoop(); //if correct press then continue game;
    
    
}
else{
    removeBgColorById(playerPressed,'bg-[#FFA500]')
    const audio=new Audio("audio/buzzer.mp3");
    audio.playbackRate=6;
    audio.play();
    life=life-1; //if wrong press then decrement life
    setLife(life); //update life
    if(life===0){ //if no life left
    gameOver(score); //game is over 
    }
    else{
       
        gameLoop(); //otherwise continue playing
    }
}

}
function gameLoop(){
//random alphabet generation

let randomAlpha=getRandomAlphabet();
const playScreen = document.getElementById('play-screen');

playScreen.innerText=randomAlpha.toUpperCase();
//set key color
setBgColorById(randomAlpha.toString(),'bg-[#FFA500]');
document.addEventListener('keyup', handleKeyPress );



}
function play(){
    hideElementById('home');
    showElementById('playground');
    gameLoop();

}