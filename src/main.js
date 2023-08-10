import { searchByName } from "./data.js";
import data from "./data/tarot/tarot.js";

const cardsContainer = document.querySelector("#cards-container");

const input = document.getElementById("search");
input.addEventListener("focus", () => {
  input.placeholder = "";
});
input.addEventListener("blur", () => {
  if (!input.value) {
    input.placeholder = "Find your tarot card";
  }
});

function createImgElement(card, flipContainer) {
  const imgElement = document.createElement("img");
  imgElement.src = card.img;
  imgElement.alt = card.name;
  imgElement.classList.add("cards-front");
  flipContainer.appendChild(imgElement);
  return imgElement;
}

function createCardsBack(card, imgElement, flipContainer, index) {
  const flipper = document.createElement("div");
  flipper.classList.add("flipper");
  flipContainer.appendChild(flipper);
  flipper.appendChild(imgElement);

  const divBack = document.createElement("div");
  divBack.classList.add("cards-back");
  flipper.appendChild(divBack);

  const name = document.createElement("p");
  name.classList.add("card-name");
  name.textContent = card.name;
  divBack.appendChild(name);

  const value = document.createElement("p");
  value.classList.add("card-info");
  value.textContent = "Value: " + card.value;
  divBack.appendChild(value);

  const type = document.createElement("p");
  type.classList.add("card-info");
  type.textContent = "Arcane:\n" + card.type;
  divBack.appendChild(type);

  const btnLearn = document.createElement("button");
  btnLearn.classList.add("card-button");
  btnLearn.textContent = "Learn more";
  divBack.appendChild(btnLearn);

  return divBack;
}

function renderCard(card) {
  const flipContainer = document.createElement("div");
  flipContainer.classList.add("flip-container");
  cardsContainer.appendChild(flipContainer);

  const imgElement = createImgElement(card, flipContainer);
  createCardsBack(card, imgElement, flipContainer);
}

for (let i = 0; i < data.cards.length; i++) {
  renderCard(data.cards[i]);
}

let dataTarot = data.cards;

function searchName(evento) {
  const name = evento.target.value;
  const result = searchByName(dataTarot, name);

  cardsContainer.innerHTML = ""; // Limpa o contêiner antes de renderizar os resultados

  for (const card of result) {
    renderCard(card);
  }
}

input.addEventListener("keyup", searchName);

console.log(dataTarot);



