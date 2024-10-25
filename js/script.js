let currentIndex = -1;
let questions = [];
let packs = ['strangers', 'friends', 'couples'];

const questionBox = document.getElementById('questionBox');
const nextButton = document.getElementById('nextButton');
const startupScreen = document.getElementById('startupScreen');

packs.forEach(pack => {
    const button = document.createElement('button');
    button.textContent = pack.charAt(0).toUpperCase() + pack.slice(1);
    button.addEventListener('click', () => {
        import(`./questions_${pack}.js`).then(module => {
            questions = module.questions;
            startGame();
        }).catch(error => {
            console.error(`Failed to load questions for ${pack}:`, error);
        });
    });
    startupScreen.appendChild(button);
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
