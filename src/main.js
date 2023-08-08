import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/tarot/tarot.js';
// import data from './data/rickandmorty/rickandmorty.js';

// console.log(example, data);

const cardsContainer = document.querySelector("#cards-container");

cardsContainer.classList.add("flip-container");

const imgElement = document.createElement("img");
imgElement.src = data.cards[0].img;
imgElement.alt = data.cards[0].name;
cardsContainer.appendChild(imgElement);

imgElement.classList.add("cards-front");

const flipper = document.createElement("div");
flipper.classList.add("flipper");

const divBack = document.createElement("div");
divBack.classList.add("cards-back");
console.log(divBack);

const name = document.createElement("p");
// name.classList.add("");
name.textContent = data.cards[0].name;

const type = document.createElement("p");
// type.classList.add("");
type.textContent = data.cards[0].type;

const value = document.createElement("p");
// value.classList.add("");
value.textContent = data.cards[0].value;

cardsContainer.appendChild(flipper);

flipper.appendChild(imgElement);
flipper.appendChild(divBack);
divBack.appendChild(name);
divBack.appendChild(type);
divBack.appendChild(value);



const input = document.getElementById("search");
input.addEventListener("focus", () => {
    input.placeholder = '';
});
input.addEventListener("blur", () => {
    if (!input.value) {
        input.placeholder = "Find your tarot card";
    }
});





// for (let i = 0; i < data.cards.length; i++) {

// }


// const descElement = document.createElement('desc');
// descElement.textContent = data.cards[i].desc;
// description.appendChild(descElement);

// const images = data.cards.map(card => card.img);
// console.log(images);

// const names = data.cards.map(card => card.name);
// console.log(names);