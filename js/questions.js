let currentIndex = -1;
let questions = [];

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');

    if (category) {
        document.getElementById('categoryTitle').textContent = `${category.charAt(0).toUpperCase() + category.slice(1).replace(/_/g, ' ')}`;
        const sanitizedCategory = category.replace(/[^a-zA-Z0-9_]/g, '');
        import(`./questions_${sanitizedCategory}.js`).then(module => {
            questions = module.questions;
            setupQuestionBox();
        }).catch(error => {
            console.error(`Failed to load questions for ${category}:`, error);
            document.getElementById('questionBox').textContent = 'Could not load questions. Please try again.';
        });
    }
});

function setupQuestionBox() {
    const questionBox = document.getElementById('questionBox');
    const nextButton = document.getElementById('nextButton');

    nextButton.addEventListener('click', () => {
        let previousIndex = currentIndex;
        do {
            currentIndex = Math.floor(Math.random() * questions.length);
        } while (currentIndex === previousIndex);
        questionBox.textContent = questions[currentIndex];
    });

    questionBox.textContent = 'Click "Next" to start';
}
