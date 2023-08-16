// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.
const elInput = document.querySelector('#font-size-control');
const elSpan = document.querySelector('#text');

elInput.addEventListener('input', () => {
  const fontSize = elInput.value;
  elSpan.style.fontSize = `${fontSize}px`;
});
