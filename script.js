const questions = [
    "What's your favorite movie of all time?",
    "If you could have dinner with any person, living or dead, who would it be?",
    "What's the best vacation you've ever had?",
    "If you could have any superpower, what would it be and why?",
    "What's your favorite book or author?",
    "What's the most interesting place you've ever visited?",
    "What hobby have you always wanted to pick up?",
    "What's your go-to comfort food?",
    "What's a fun fact about you that not many people know?",
    "If you could learn any language fluently, which would it be?",
];

let currentIndex = -1;

const questionBox = document.getElementById('questionBox');
const nextButton = document.getElementById('nextButton');

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % questions.length;
    questionBox.textContent = questions[currentIndex];
});
