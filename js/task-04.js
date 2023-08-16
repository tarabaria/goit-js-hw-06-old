// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const valueSpan = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

let counterValue = 0;

const updateCounterValue = () => {
  valueSpan.textContent = counterValue;
};

decrementBtn.addEventListener('click', () => {
  counterValue -= 1;
  updateCounterValue();
});

incrementBtn.addEventListener('click', () => {
  counterValue += 1;
  updateCounterValue();
});

updateCounterValue();
