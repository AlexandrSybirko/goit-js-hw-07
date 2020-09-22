const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

inputRef.addEventListener('input', changeFontSize);

function changeFontSize() {
  textRef.style.fontSize = inputRef.value + 'px';
}
