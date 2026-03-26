import {descriptionPhoto} from './generate-photo-data.js';
import {generateUsersPhoto} from './users-photo.js';
//import {generateBigPhoto} from './big-users-photo.js';

const picturesContainer = document.querySelector('.pictures');

generateUsersPhoto(descriptionPhoto, picturesContainer);

/*const bigPicture = document.querySelector('.big-picture');
const canselBigPicures = document.querySelector('.big-picture__cancel');

picturesContainer.addEventListener('click', (evt) => {
  if (evt.target.closest('.picture')) {
    bigPicture.classList.remove('hidden');

    const bigPictureImg = bigPicture.querySelector('.big-picture__img').querySelector('img');

    bigPictureImg.src = evt.target.src;
    bigPictureImg.alt = evt.target.alt;
  }
});

canselBigPicures.addEventListener('click', () => {
  bigPicture.classList.add('hidden');
});*/
