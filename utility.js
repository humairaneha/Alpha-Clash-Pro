function getRandomAlphabet(){
    const alphabetsString ='abcdefghijklmnopqrstuvwxyz';
    let randomIndex = Math.round(Math.random()*25);
    let randomAlpha = alphabetsString[randomIndex];
    return randomAlpha;
}
function hideElementById(id){
    const homeScreen=document.getElementById(id);
    homeScreen.classList.add('hidden');
}
function showElementById(id){
    const homeScreen=document.getElementById(id);
    homeScreen.classList.remove('hidden');
}
function setBgColorById(id,color){
    const element = document.getElementById(id);
    element.classList.add(color);
}
function removeBgColorById(id,color){
    const element = document.getElementById(id);
    element.classList.remove(color);
}
function setScore(score){
 const score_fields = document.getElementsByClassName('score-val');
 for (field of score_fields){
    field.innerText=score;
 }
}
function setLife(life){
    const life_field = document.getElementById('life');
    life_field.innerText=life;
}