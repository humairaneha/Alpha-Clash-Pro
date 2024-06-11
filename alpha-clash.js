
function getRandomAlphabet(){
    const alphabetsString ='abcdefghijklmnopqrstuvwxyz';
    let randomIndex = Math.round(Math.random()*25);
    let randomAlpha = alphabetsString[randomIndex];
    return randomAlpha;
}
function gameLoop(){
//random alphabet generation

let randomAlpha=getRandomAlphabet();
const playScreen = document.getElementById('play-screen');
console.log(randomAlpha);
playScreen.innerText=randomAlpha.toUpperCase();
console.log(randomAlpha);
const kbdKey = document.getElementById(randomAlpha.toString());
kbdKey.classList.add('bg-[#FFA500]');


}
function play(){
    const homeScreen=document.getElementById('home');
    homeScreen.classList.add('hidden');
    const playScreen = document.getElementById('playground');
    playScreen.classList.remove('hidden');
    gameLoop();

}