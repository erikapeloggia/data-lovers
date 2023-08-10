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


export{
  searchByName
};


