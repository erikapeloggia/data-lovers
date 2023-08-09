// import { example } from "./data.js";
// import data from './data/lol/lol.js';
import data from "./data/tarot/tarot.js";
// import data from './data/rickandmorty/rickandmorty.js';

// console.log(example, data);
const input = document.getElementById("search");
input.addEventListener("focus", () => {
  input.placeholder = "";
});
input.addEventListener("blur", () => {
  if (!input.value) {
    input.placeholder = "Find your tarot card";
  }
});

for (let i = 0; i < data.cards.length; i++) {
const cardsContainer = document.querySelector("#cards-container");
const flipContainer = document.createElement("div");
flipContainer.classList.add("flip-container");

const imgElement = document.createElement("img");
imgElement.src = data.cards[i].img;
imgElement.alt = data.cards[i].name;
imgElement.classList.add("cards-front");
flipContainer.appendChild(imgElement);

const flipper = document.createElement("div");
flipper.classList.add("flipper");
flipContainer.appendChild(flipper);
flipper.appendChild(imgElement);

const divBack = document.createElement("div");
divBack.classList.add("cards-back");
flipper.appendChild(divBack);

cardsContainer.appendChild(flipContainer);

const name = document.createElement("p");
name.classList.add("card-name");
name.textContent = data.cards[i].name;
divBack.appendChild(name);

const value = document.createElement("p");
value.classList.add("card-info");
value.textContent = "Value: " + data.cards[i].value;
divBack.appendChild(value);

const type = document.createElement("p");
type.classList.add("card-info");
type.textContent = "Arcane:\n" + data.cards[i].type;
divBack.appendChild(type);

const btnLearn = document.createElement("button");
btnLearn.classList.add("card-button");
btnLearn.textContent = "Learn more";
divBack.appendChild(btnLearn);

const modal = document.querySelector("#modal");
const modalContainer = document.createElement("div");
modalContainer.classList.add("modal-container");
modal.appendChild(modalContainer);


const modalHeader = document.createElement("div");
modalHeader.classList.add("modal-header");
modalHeader.textContent = "About " + data.cards[i].name;
modalContainer.appendChild(modalHeader);

const closeModal = document.createElement("button");
closeModal.classList.add("close-modal");
// closeModal.textContent = "X";
modalContainer.appendChild(closeModal);

const imgBtnModal = document.createElement("img");
closeModal.src = "../assets/close-modal.png";
closeModal.alt = "Button close modal";
closeModal.appendChild(imgBtnModal);

const imgModal = document.createElement("img");
imgModal.src = data.cards[i].img;
imgModal.alt = data.cards[i].name;
imgModal.classList.add("img-modal");
modalContainer.appendChild(imgModal);

const infoCard = document.createElement("div");
infoCard.classList.add("info-card");
modalContainer.appendChild(infoCard);

const meaningUp = document.createElement("p");
meaningUp.classList.add("meaning-up");
meaningUp.textContent = data.cards[i].meaning_up;
infoCard.appendChild(meaningUp);

const meaningRev = document.createElement("p");
meaningRev.classList.add("meaning-rev");
meaningRev.textContent = data.cards[i].meaning_rev;
infoCard.appendChild(meaningRev);

const desc = document.createElement("p");
desc.classList.add("desc");
desc.textContent = data.cards[i].desc;
infoCard.appendChild(desc);

const fade = document.querySelector("#fade");

const toggleModal = () => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};

[btnLearn, closeModal, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});
}

