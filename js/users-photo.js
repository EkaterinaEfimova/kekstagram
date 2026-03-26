import { generateBigPhoto } from './big-users-photo.js';

const generateUsersPhoto = function (dateArrey, container) {
  const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

  const picturesList = dateArrey;
  const picturesListFragment = document.createDocumentFragment();

  picturesList.forEach((picture) => {
    const {url, description, likes, comments} = picture;
    const picturesElement = pictureTemplate.cloneNode(true);
    const picturesElementImg = picturesElement.querySelector('.picture__img');

    picturesElementImg.src = url;
    picturesElementImg.alt = description;
    picturesElement.querySelector('.picture__likes').textContent = likes;
    picturesElement.querySelector('.picture__comments').textContent = comments.length;
    picturesListFragment.appendChild(picturesElement);

    picturesElement.addEventListener('click', () => {
      generateBigPhoto(picture);
    });
  });

  container.appendChild(picturesListFragment);
};

export {generateUsersPhoto};
