import {descriptionPhoto} from './generate-photo-data.js';
import {generateUsersPhoto} from './users-photo.js';

const picturesContainer = document.querySelector('.pictures');

generateUsersPhoto(descriptionPhoto, picturesContainer);
