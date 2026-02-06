import { getRandomInteger, getRandomArrayElement, createIdGenerator, createArray } from './utils.js';
import { MESSAGETEXT, USERNAME, LOWER_BOUNDARY_COMMON, LOWER_BOUNDARY_LIKES, UPPER_BOUNDARY_LIKES, UPPER_BOUNDARY_COMMENTS, UPPER_BOUNDARY_COMMENTS_ID, UPPER_BOUNDARY_COMMENTS_AVATAR, LOWER_BOUNDARY_COMMENTS_MESSAGE, UPPER_BOUNDARY_COMMENTS_MESSAGE, QUANTITY_PHOTO } from './photo-data.js';

const createCommentText = () => {
  const quantitySentence = getRandomInteger(LOWER_BOUNDARY_COMMENTS_MESSAGE, UPPER_BOUNDARY_COMMENTS_MESSAGE);
  const resultText = [];
  for (let i = LOWER_BOUNDARY_COMMENTS_MESSAGE; i <= quantitySentence; i++) {
    let currentValue = getRandomArrayElement(MESSAGETEXT);

    if (resultText.includes(currentValue)) {
      currentValue = getRandomArrayElement(MESSAGETEXT);
    }
    resultText.push(currentValue);
  }
  const message = resultText.join(' ');
  return message;
};

const createComments = () => {
  function createMessageId() {
    const previousValues = [];

    let currentValue = getRandomInteger(LOWER_BOUNDARY_COMMON, UPPER_BOUNDARY_COMMENTS_ID);
    if (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(LOWER_BOUNDARY_COMMON, UPPER_BOUNDARY_COMMENTS_ID);
    }
    previousValues.push(currentValue);
    return currentValue;
  }

  const generateCommentsId = createMessageId();

  return {
    id: generateCommentsId,
    avatar:`img/avatar-${getRandomInteger(LOWER_BOUNDARY_COMMON, UPPER_BOUNDARY_COMMENTS_AVATAR)}.svg`,
    message: createCommentText(),
    userName: getRandomArrayElement(USERNAME)
  };
};

const createPhotoId = createIdGenerator();
const createUrl = createIdGenerator();

const createDescriptionPhoto = () => {

  const getQuantityComments = getRandomInteger(LOWER_BOUNDARY_COMMON, UPPER_BOUNDARY_COMMENTS);
  const commentsArray = createArray(getQuantityComments, createComments);

  return {
    id: createPhotoId(),
    url: `photos/${createUrl()}.jpg`,
    description: 'Просто красивое фото.',
    likes: getRandomInteger(LOWER_BOUNDARY_LIKES, UPPER_BOUNDARY_LIKES),
    comments: commentsArray
  };
};

const descriptionPhoto = createArray(QUANTITY_PHOTO, createDescriptionPhoto);

export {descriptionPhoto};
