const ulList = document.querySelector('.gallery');
const imagesMarkup = images
  .map(image => {
    return `<li><img src="${image.url}" alt="${image.alt}"></li>`;
  })
  .join('');

ulList.insertAdjacentHTML('beforeend', imagesMarkup);
