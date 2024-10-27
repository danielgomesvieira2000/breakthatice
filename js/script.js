const startupScreen = document.getElementById('startupScreen');

fetch('/categories.json')
  .then(response => response.json())
  .then(data => {
    for (const [category, packs] of Object.entries(data)) {
      const header = document.createElement('h3');
      header.className = 'col-12 mt-4';
      header.textContent = category;
      startupScreen.appendChild(header);

      for (const [pack, details] of Object.entries(packs)) {
        const card = document.createElement('div');
        card.className = 'col-12 col-sm-6 col-md-4 mb-4';
        card.innerHTML = `
          <div class="card h-100" style="max-width: 16rem;">
            <img src="/media/pack_thumbnails/thumb_${pack.toLowerCase().replace(/\s+/g, '_')}.png" class="card-img-top" alt="${pack}">
            <div class="card-body">
              <h5 class="card-title">${pack}</h5>
              <p class="card-text">${details.description}</p>
              <button class="btn btn-primary">Select</button>
            </div>
          </div>
        `;

        card.querySelector('button').addEventListener('click', () => {
          window.location.href = `/html/questions.html?category=${pack.toLowerCase().replace(/\s+/g, '_')}`;
        });

        startupScreen.appendChild(card);
      }
    }
  })
  .catch(error => console.error('Error loading JSON:', error));
