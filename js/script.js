// API endpoint
const baseUrl = 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72/';

//Pegando o elemento da Div
const cardsContainer = document.querySelector("#cards");
let data = [];

async function fetchCards() {
    let response = await fetch(baseUrl)
    return await response.json()
}

function renderCards(cards) {
    cardsContainer.innerHTML = "";
    cards.map(renderCard);
}

function renderCard(card) {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
    <img src="${card.photo}" class="card-img-top" alt="${card.name}" />
    <div class="card-body">
      <h5 class="card-title">${card.name}</h5>
      <p class="card-text">
        Tipo: ${card.property_type}
      </p>
      <p class="card-text-price">
      Preço: R$ ${card.price},00
    </p>
    </div>
  `;
    cardsContainer.appendChild(div);
}

async function main() {
    data = await fetchCards();
    if (data[0]) {
        renderCards(data);
    }
}

main();