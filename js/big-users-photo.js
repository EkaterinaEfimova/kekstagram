const generateBigPhoto = function (evt) {
  const bigPicture = document.querySelector('.big-picture__preview');
  const bigPictureImg = bigPicture.querySelector('.big-picture__img').querySelector('img');

  bigPictureImg.src = evt.target.src;
  bigPictureImg.alt = evt.target.alt;

};

export {generateBigPhoto};
