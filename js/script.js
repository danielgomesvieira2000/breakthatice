import { questions } from './questions_strangers.js';

let currentIndex = -1;

const questionBox = document.getElementById('questionBox');
const nextButton = document.getElementById('nextButton');

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % questions.length;
    questionBox.textContent = questions[currentIndex];
});
