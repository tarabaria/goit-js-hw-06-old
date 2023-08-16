// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.

const inputElement = document.getElementById('validation-input');

inputElement.addEventListener('blur', () => {
  const desiredLength = Number(inputElement.getAttribute('data-length'));
  const inputLength = inputElement.value.length;
  if (desiredLength === inputLength) {
    inputElement.classList.remove('invalid');
    inputElement.classList.add('valid');
  } else {
    inputElement.classList.remove('valid');
    inputElement.classList.add('invalid');
  }
});
