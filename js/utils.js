const getRandomInteger = (boundaryA, boundaryB) => {
  const lower = Math.ceil(Math.min(Math.abs(boundaryA), Math.abs(boundaryB)));
  const upper = Math.floor(Math.max(Math.abs(boundaryA), Math.abs(boundaryB)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (array) => array[getRandomInteger(0, array.length - 1)];

const createIdGenerator = () => {
  let currentId = 0;
  return () => ++currentId;
};

const createArray = (number, element) => {
  const resultArray = Array.from({length: number}, element);
  return resultArray;
};

const toggleClass = (element, className = '') => {
  if (element) {
    element.classList.toggle(className);
  }
};

const isEscapeKey = (evt) => evt.key === 'Escape';

export { getRandomInteger, getRandomArrayElement, createIdGenerator, createArray, toggleClass, isEscapeKey };
