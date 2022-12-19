import { galleryItems } from './gallery-items.js';
// Change code below this line
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector('.gallery');
const galleryItemsMurkup = createGalleryItemsMurkup(galleryItems);
    
galleryContainer.insertAdjacentHTML('beforeend', galleryItemsMurkup);

function createGalleryItemsMurkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}"/>
            </a>
        
        `
    })
        .join('');
    
}

let gallery = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250});
