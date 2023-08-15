// estas funciones son de ejemplo

// export const example = () => {
//   return 'example';
// };

// export const anotherExample = () => {
//   return 'OMG';
// };

const searchByName = (cards, name) => {
  return cards.filter((cards) => {
    return cards.name.toLowerCase().includes(name.toLowerCase());
    
  });
};

const filterArcane = (data, arcaneSelected) => {
  return data.filter((card) => card.type === arcaneSelected);
};

const filterSuits = (data, suitsSelected) => {
  return data.filter((card) => card.suit === suitsSelected);
};

// function numericalOrder(cards, valueSelected) {
//   cards.sort((a, b) => {
//     if (valueSelected === 'major-value') {
//       return b.value - a.value; // Maior para o menor
//     } else if (valueSelected === 'minor-value') {
//       return a.value - b.value; // Menor para o maior
//     }
//     // Você pode adicionar mais opções de ordenação aqui, se necessário.
//     // Certifique-se de retornar um valor para cada caso.
//   });
// }



function numericalOrder(value, cards) {
  const orderValue = [...cards];
  if (value === "minor-value") {
    orderValue.sort(function (a, b) {
      return a.value - b.value; // Ordenação crescente: menor para maior
    });
  } else if (value === "major-value") {
    orderValue.sort(function (a, b) {
      return b.value - a.value; // Ordenação decrescente: maior para menor
    });
  }
  return orderValue;
}

export{
  searchByName,
  filterArcane,
  filterSuits,
  numericalOrder
};




