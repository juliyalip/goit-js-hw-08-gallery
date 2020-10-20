import gallery from "./gallery-items.js";

const containerUl = document.querySelector('.js-gallery');
console.log(containerUl)

const makeImageMarkup = elements => {
  const { preview, original, description } = elements;
    return `<li class="gallery__item">
                <a href="${original}" class="gallery__link">
                <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
                </a>
  </li>`;
};

const makeGalleryMarkup = gallery.map(makeImageMarkup).join('');
containerUl.insertAdjacentHTML('beforeend', makeGalleryMarkup);

 //Модальное окно для полноразмерного изображения
  //    Для того чтобы открыть, необходимо добавить на div.lightbox CSS-класс is-open

const buttonEl = document.querySelector('button'); 
const imagesEl = document.querySelector('.lightbox__image')

const lightboxEl = document.querySelector('.lightbox');
console.log(lightboxEl)

containerUl.addEventListener('click', onClick)

function onClick(event) {
    event.preventDefault();
    // проверка куда мы клацнули
    if (event.target.nodeName !== 'IMG')  
    { return; }
     lightboxEl.classList.add('is-open');
    imagesEl.src = event.target.dataset.source;
    imagesEl.alt = event.target.alt;
   buttonEl.addEventListener('click', closeModal)
    return event.target.dataset.source
   
  }

function closeModal() {
    
    lightboxEl.classList.remove('is-open');
    imagesEl.src = '';

}
