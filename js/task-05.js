const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', () => {
  const inputText = nameInput.value;
  if (inputText !== '') {
    nameOutput.textContent = inputText;
  } else {
    nameOutput.textContent = 'Anonymous';
  }
});
