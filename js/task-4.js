const decrementBtnRef = document.querySelector(
  '#counter button[data-action="decrement"]',
);

const incrementBtnRef = document.querySelector(
  '#counter button[data-action="increment"]',
);

const counterRef = document.querySelector('#value');
let counterValue = 0;

decrementBtnRef.addEventListener('click', decrementBtnClick);
incrementBtnRef.addEventListener('click', incrementBtnClick);

function incrementBtnClick() {
  counterValue += 1;
  counterRef.textContent = counterValue;
}

function decrementBtnClick() {
  counterValue -= 1;
  counterRef.textContent = counterValue;
}
