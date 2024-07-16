let currentIndex = -1;
let questions = [];

const questionBox = document.getElementById('questionBox');
const nextButton = document.getElementById('nextButton');
const startupScreen = document.getElementById('startupScreen');
const strangersButton = document.getElementById('strangersButton');
const friendsButton = document.getElementById('friendsButton');
const couplesButton = document.getElementById('couplesButton');

strangersButton.addEventListener('click', () => {
    import('./questions_strangers.js').then(module => {
        questions = module.questions;
        startGame();
    });
});

friendsButton.addEventListener('click', () => {
    import('./questions_friends.js').then(module => {
        questions = module.questions;
        startGame();
    });
});

couplesButton.addEventListener('click', () => {
    import('./questions_couples.js').then(module => {
        questions = module.questions;
        startGame();
    });
});

nextButton.addEventListener('click', () => {
    let previousIndex = currentIndex;
    do {
        currentIndex = Math.floor(Math.random() * questions.length);
    } while (currentIndex === previousIndex);
    questionBox.textContent = questions[currentIndex];
});


function startGame() {
    startupScreen.style.display = 'none';
    questionBox.style.display = 'block';
    nextButton.style.display = 'flex';
    nextButton.style.justifyContent = 'space-between';
    currentIndex = -1;
    questionBox.textContent = 'Click "Next Question" to start';
}
