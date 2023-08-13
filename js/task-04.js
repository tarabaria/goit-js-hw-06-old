const counterValueElement = document.querySelector('#value');
const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);

let counterValue = 0;

decrementButton.addEventListener('click', () => {
  counterValue -= 1;
  counterValueElement.textContent = counterValue;
});

incrementButton.addEventListener('click', () => {
  counterValue += 1;
  counterValueElement.textContent = counterValue;
});
