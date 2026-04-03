import { toggleClass, isEscapeKey } from './utils.js';

const COMMENTS_STEP = 5;

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img').querySelector('img');
const bigPictureLikes = bigPicture.querySelector('.likes-count');
const bigPictureDescription = bigPicture.querySelector('.social__caption');
const bigPictureCancelButton = bigPicture.querySelector('.big-picture__cancel');
const commentsCount = document.querySelector('.social__comment-count');
const socialComments = document.querySelector('.social__comments');
const socialComment = socialComments.querySelector('.social__comment');
const commentLoader = document.querySelector('.comments-loader');
const commentFragment = document.createDocumentFragment();

let commentsArray = [];
let commentsShowCount = COMMENTS_STEP;

const toggleModal = () => {
  toggleClass(bigPicture, 'hidden');
  toggleClass(document.body, 'modal-open');
};

const createComment = (comment) => {
  const {avatar, message, userName} = comment;
  const newComment = socialComment.cloneNode(true);
  const commentAvatar = newComment.querySelector('.social__picture');
  const commentMessage = newComment.querySelector('.social__text');

  commentAvatar.src = avatar;
  commentAvatar.alt = userName;
  commentMessage.textContent = message;

  return newComment;
};

const generateComments = () => {
  socialComments.innerHTML = '';
  commentsCount.innerHTML = '';

  commentsShowCount = (commentsShowCount > commentsArray.length) ? commentsArray.length : commentsShowCount;
  commentsCount.innerHTML = `<span class="social__comment-shown-count">${commentsShowCount}</span> из <span class="social__comment-total-count">${commentsArray.length}</span> комментариев`;

  for (let i = 0; i < commentsShowCount; i++) {
    commentFragment.appendChild(createComment(commentsArray[i]));
  }

  if (commentsShowCount < COMMENTS_STEP || commentsShowCount >= commentsArray.length) {
    commentLoader.classList.add('hidden');
  } else {
    commentLoader.classList.remove('hidden');
  }

  socialComments.appendChild(commentFragment);
};

const show = (picture) => {
  const {url, description, likes} = picture;

  bigPictureImg.src = url;
  bigPictureImg.alt = description;
  bigPictureDescription.textContent = description;
  bigPictureLikes.textContent = likes;
};

const onLoadButtonClick = () => {
  commentsShowCount += COMMENTS_STEP;
  generateComments();
};

function onBigPictureEscKeyDown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
    commentsShowCount = COMMENTS_STEP;
  }
}

const onCanselBigPictureClick = () => {
  toggleModal();
  commentsShowCount = COMMENTS_STEP;
};

function closeBigPicture() {
  onCanselBigPictureClick();
  document.removeEventListener('keydown', onBigPictureEscKeyDown);
}

const generateBigPhoto = (picture) => {

  commentsArray = picture.comments.slice();

  toggleModal();

  show(picture);

  generateComments();

  document.addEventListener('keydown', onBigPictureEscKeyDown);
};

commentLoader.addEventListener('click', onLoadButtonClick);
bigPictureCancelButton.addEventListener('click', onCanselBigPictureClick);

export {generateBigPhoto};
