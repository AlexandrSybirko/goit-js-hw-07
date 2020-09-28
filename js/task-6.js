const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', check);

const checkLength = Number(inputRef.dataset.length);

function check() {
  if (inputRef.value.length === checkLength) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  } else if (inputRef.value.length === 0) {
    inputRef.classList.remove('invalid');
    inputRef.classList.remove('valid');
  } else {
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid');
  }
}
