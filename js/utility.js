function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBgColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');

}

function getElementTextValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    console.log(elementValueText);
    const value = parseInt(elementValueText);
    return value;
}

function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const id = element.innerText;
    return id;
}

function setElementTextById(elementId, value ){
    const element = document.getElementById(elementId);
    element.innerText = value;
}



function removeBgColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');

}

function getRandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];
    return alphabet;
}