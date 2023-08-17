// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnEl = document.querySelector('.change-color');
const newColorText = document.querySelector('.color');
const bodyEL = document.body;

btnEl.addEventListener('click', function () {
  const randomColor = getRandomHexColor();
  bodyEL.style.backgroundColor = randomColor;
  newColorText.textContent = randomColor;
});
