const MESSAGETEXT = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const USERNAME = [
  'Татьяна',
  'Светлана',
  'Иван',
  'Михаил',
  'Сергей'
];

const LOWER_BOUNDARY_COMMON = 1;
const LOWER_BOUNDARY_LIKES = 15;
const UPPER_BOUNDARY_LIKES = 200;
const UPPER_BOUNDARY_COMMENTS = 30;
const UPPER_BOUNDARY_COMMENTS_ID = 1000;
const UPPER_BOUNDARY_COMMENTS_AVATAR = 6;
const LOWER_BOUNDARY_COMMENTS_MESSAGE = 1;
const UPPER_BOUNDARY_COMMENTS_MESSAGE = 2;
const QUANTITY_PHOTO = 25;


const getRandomInteger = (boundaryA, boundaryB) => {
  const lower = Math.ceil(Math.min(Math.abs(boundaryA), Math.abs(boundaryB)));
  const upper = Math.floor(Math.max(Math.abs(boundaryA), Math.abs(boundaryB)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (array) => array[getRandomInteger(0, array.length - 1)];

function createIdGenerator() {
  let currentId = 0;
  return () => ++currentId;
}

function createArray(number, element) {
  return Array.from({length: number}, element);
}

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

function createComments() {
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
}

const createPhotoId = createIdGenerator();
const createUrl = createIdGenerator();

function createDescriptionPhoto() {

  const getQuantityComments = getRandomInteger(LOWER_BOUNDARY_COMMON, UPPER_BOUNDARY_COMMENTS);
  const commentsArray = createArray(getQuantityComments, createComments);

  return {
    id: createPhotoId(),
    url: `photos/${createUrl()}.jpg`,
    description: 'Просто красивое фото.',
    likes: getRandomInteger(LOWER_BOUNDARY_LIKES, UPPER_BOUNDARY_LIKES),
    comments: commentsArray
  };
}

const descriptionPhoto = createArray(QUANTITY_PHOTO, createDescriptionPhoto);
console.log(descriptionPhoto);
