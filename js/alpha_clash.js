
document.addEventListener('keyup', function(event){
    // console.log(event.key + 'your key');
    const pressKey = event.key;

    // stop the game if press esc
    if(pressKey === 'Escape'){
        gameOver();
    }

    const alphabetElement = document.getElementById('current-alphabet');
    const screenAlphabetElement = alphabetElement.innerText.toLowerCase();

    console.log(event.key + ' your press key ' + screenAlphabetElement + ' screen letter');

    if(pressKey === screenAlphabetElement){
        console.log('You got a point');
        // update score
        const currentScore = getElementTextValueById('current-score');
        const updateScore = currentScore + 1;
        setElementTextById('current-score', updateScore);
        // const scoreElement = document.getElementById('current-score');
        // const currentScore = scoreElement.innerText;
        // const score = parseInt(currentScore);
        // const updateScore = score + 1;
        // scoreElement.innerText = updateScore;
        removeBgColor(screenAlphabetElement);
        continueGame();
    }else{
        console.log('you wrong and lost a life');
        // const lifeElement = document.getElementById('current-life');
        // const currentLifeText = lifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        const currentLife = getElementTextValueById('current-life');

        const updateLife = currentLife - 1;

        // lifeElement.innerText = updateLife;
        setElementTextById('current-life', updateLife);
        if(updateLife === 0){
            console.log('game Over'); 
            gameOver();
        }
    }
});

function continueGame(){
    const alphabet = getRandomAlphabet();

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBgColor(alphabet);
}

function play (){
    // const homeScreen = document.getElementById('home');
    // homeScreen.classList.add('hidden');

    // const playGroundScreen = document.getElementById('play-ground');
    // playGroundScreen.classList.remove('hidden');

    hideElementById('home');
    hideElementById('final-score');
    showElementById('play-ground');

    setElementTextById('current-life', 5);
    setElementTextById('current-score', 0);
    continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');

    const lastScore = getElementTextValueById('current-score');
    setElementTextById('game-score', lastScore);
//clear background of Alphabet;

    const currentAlphabet = getElementTextById('current-alphabet');
    removeBgColor(currentAlphabet);
}