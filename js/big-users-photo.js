import { toggleClass, isEscapeKey } from './utils.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img').querySelector('img');
const bigPictureLikes = bigPicture.querySelector('.likes-count');
const bigPictureComments = bigPicture.querySelector('.social__comment-total-count');
const bigPictureDescription = bigPicture.querySelector('.social__caption');
const bigPictureCancelButton = bigPicture.querySelector('.big-picture__cancel');

const toggleModal = () => {
  toggleClass(bigPicture, 'hidden');
  toggleClass(document.body, 'modal-open');
};

const onCanselBigPictureClick = () => {
  toggleModal();
};

function onBigPictureEscKeyDown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
}

function closeBigPicture() {
  onCanselBigPictureClick();
  document.removeEventListener('keydown', onBigPictureEscKeyDown);
}

const generateBigPhoto = function (picture) {
  const {url, description, likes, comments} = picture;

  toggleModal();

  bigPictureImg.src = url;
  bigPictureImg.alt = description;
  bigPictureDescription.textContent = description;
  bigPictureLikes.textContent = likes;
  bigPictureComments.textContent = comments.length;

  document.addEventListener('keydown', onBigPictureEscKeyDown);
};

bigPictureCancelButton.addEventListener('click', onCanselBigPictureClick);

export {generateBigPhoto};
