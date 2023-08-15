import {
  searchByName,
  filterArcane,
  filterSuits,
  numericalOrder,
} from "./data.js";
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
  btnLearn.setAttribute("data-card-index", index);
  divBack.appendChild(btnLearn);

  return divBack;
}

function renderCard(card, index) {
  const flipContainer = document.createElement("div");
  flipContainer.classList.add("flip-container");
  cardsContainer.appendChild(flipContainer);

  const imgElement = createImgElement(card, flipContainer);
  createCardsBack(card, imgElement, flipContainer, index);

  const btnLearn = flipContainer.querySelector(".card-button");
  btnLearn.addEventListener("click", () => {
    openModal(index);
  });
}

function searchName(event) {
  const name = event.target.value;
  const result = searchByName(data.cards, name);
  renderFilteredCards(result);
}

function renderFilteredCards(cards) {
  cardsContainer.innerHTML = "";
  for (const card of cards) {
    const index = data.cards.indexOf(card);
    renderCard(card, index);
  }
}

for (let i = 0; i < data.cards.length; i++) {
  renderCard(data.cards[i], i);
}

input.addEventListener("keyup", searchName);

const fade = document.querySelector("#fade");
const modal = document.querySelector("#modal");

const toggleModal = () => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};

function openModal(cardIndex) {
  const card = data.cards[cardIndex];

  modal.innerHTML = "";

  const modalHeader = document.createElement("div");
  modalHeader.classList.add("modal-header");
  modalHeader.textContent = "About " + card.name;
  modal.appendChild(modalHeader);

  const closeModal = document.createElement("button");
  closeModal.classList.add("close-modal");
  closeModal.textContent = "X";
  modal.appendChild(closeModal);
  closeModal.addEventListener("click", toggleModal);

  const imgModal = document.createElement("img");
  imgModal.src = card.img;
  imgModal.alt = card.name;
  imgModal.classList.add("img-modal");
  modal.appendChild(imgModal);

  const infoCard = document.createElement("div");
  infoCard.classList.add("info-card");
  modal.appendChild(infoCard);

  const meaningUp = document.createElement("p");
  meaningUp.classList.add("meaning-up");
  meaningUp.textContent = card.meaning_up;
  infoCard.appendChild(meaningUp);

  const meaningRev = document.createElement("p");
  meaningRev.classList.add("meaning-rev");
  meaningRev.textContent = card.meaning_rev;
  infoCard.appendChild(meaningRev);

  const desc = document.createElement("p");
  desc.classList.add("desc");
  desc.textContent = card.desc;
  infoCard.appendChild(desc);

  toggleModal();
}

fade.addEventListener("click", toggleModal);

const checkboxes = document.getElementsByName("type");

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", function () {
    checkboxes.forEach((cb) => {
      if (cb !== checkbox) {
        cb.checked = false;
      }
    });
  });
});

const arcane = document.getElementById("arcane");

function selectArcane(event, allCards) {
  const optionArcane = event.target.value;

  if (optionArcane === "") {
    renderFilteredCards(allCards);
    return;
  }

  const optionChose = filterArcane(allCards, optionArcane);
  renderFilteredCards(optionChose);
}

arcane.addEventListener("change", (event) => {
  selectArcane(event, data.cards);
});

const checkboxesSuits = document.getElementsByName("suit");

checkboxesSuits.forEach((checkbox) => {
  checkbox.addEventListener("click", function () {
    checkboxesSuits.forEach((cb) => {
      if (cb !== checkbox) {
        cb.checked = false;
      }
    });
  });
});

const suits = document.getElementById("suits");

function selectSuits(event, allCards) {
  const optionSuits = event.target.value;
  if (
    !checkboxesSuits[0].checked &&
    !checkboxesSuits[1].checked &&
    !checkboxesSuits[2].checked &&
    !checkboxesSuits[3].checked
  ) {
    renderFilteredCards(allCards);
    return;
  }
  if (optionSuits === "") {
    renderFilteredCards(allCards);
    return;
  }
  const optionChoseSuits = filterSuits(allCards, optionSuits);
  renderFilteredCards(optionChoseSuits);
}

suits.addEventListener("change", (event) => {
  selectSuits(event, data.cards);
});

const filterTitles = document.querySelectorAll('.filter-title');

filterTitles.forEach(function(title) {
  title.addEventListener('click', function() {
    const filter = title.parentElement;
    filter.classList.toggle('active');
  });
});

const dataTarot = data.cards;
const orderSelect = document.querySelector("#order-select");

orderSelect.addEventListener("change", () => {
  const ordemPersonagens = numericalOrder(orderSelect.value, dataTarot);
  renderFilteredCards(ordemPersonagens);
});




