let currentIndex = -1;
let questions = [];
let packs = ['strangers', 'friends', 'couples'];
let descriptions = [
    "Get to know new people better with these ice-breakers.",
    "Deepen friendships with thoughtful questions.",
    "Fun and insightful questions for couples."
];

const questionBox = document.getElementById('questionBox');
const nextButton = document.getElementById('nextButton');
const startupScreen = document.getElementById('startupScreen');

packs.forEach((pack, index) => {
    const card = document.createElement('div');
    card.className = 'col-12 col-sm-6 col-md-4 mb-4';
    card.innerHTML = `
        <div class="card h-100" style="max-width: 16rem;"> <!-- Limit card width -->
            <img src="/media/pack_thumbnails/thumb_${pack}.png" class="card-img-top" alt="${pack}">
            <div class="card-body">
                <h5 class="card-title">${pack.charAt(0).toUpperCase() + pack.slice(1)}</h5>
                <p class="card-text">${descriptions[index]}</p>
                <button class="btn btn-primary">Select</button>
            </div>
        </div>
    `;

    card.querySelector('button').addEventListener('click', () => {
        window.location.href = `/html/questions.html?category=${pack}`;
    });    

    startupScreen.appendChild(card);
});
