const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.querySelector('#ingredients');

const elements = ingredients.map(ingredient => {
  const list = document.createElement('li');
  list.textContent = ingredient;
  return list;
});
ingredientsRef.append(...elements);
console.log(ingredientsRef);
