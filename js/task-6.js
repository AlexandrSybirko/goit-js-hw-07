const inputRef = document.querySelector('#validation-input');
console.log(inputRef);

inputRef.addEventListener('blur', check);

const checkLength = Number(inputRef.dataset.length);

function check() {
  if (inputRef.value.length === checkLength) {
    inputRef.classList.add('valid');
  } else {
    inputRef.classList.add('invalid');
  }
}
