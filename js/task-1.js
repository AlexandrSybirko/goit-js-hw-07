const categoriesRef = document.querySelectorAll('.item');
console.log(`В списке ${categoriesRef.length} категории`);

categoriesRef.forEach(category => {
  const nameCategory = category.querySelector(`h2`);
  const num = category.querySelectorAll(`li`);
  console.log(`Категория: ${nameCategory.textContent}`);
  console.log(`Количество элементов: ${num.length}`);
});
