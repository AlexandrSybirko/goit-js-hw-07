const decrementBtn = document.querySelector(
  '#counter button[data-action="decrement"]',
);

const incrementBtn = document.querySelector(
  '#counter button[data-action="increment"]',
);

const counter = document.querySelector('#value');
let counterValue = 0;

decrementBtn.addEventListener('click', decrementBtnClick);
incrementBtn.addEventListener('click', incrementBtnClick);

function incrementBtnClick() {
  counterValue += 1;
  counter.textContent = counterValue;
}

function decrementBtnClick() {
  counterValue -= 1;
  counter.textContent = counterValue;
}
