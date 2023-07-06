import {descriptions, messages, names, minLikesAmount, maxLikesAmount, minAvatarNumber, maxAvatarNumber} from './data.js';

//Функция возвращает рандомное число в необходимом диапазоне
const getRandomNumberInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

//Функция возвращает количество лайков
const getLikes = () => getRandomNumberInRange(minLikesAmount, maxLikesAmount);

//Функция возвращает номер аватара
const getAvatarNumber = () => getRandomNumberInRange(minAvatarNumber, maxAvatarNumber);

//Функция создает массив из списка комментаторов
const comments = new Array(30).fill(1).map((currentValue, index) => ({
  id: index + 1,
  avatar: `img/avatar-${getAvatarNumber()}.svg`,
  message: messages[getRandomNumberInRange(0, messages.length - 1)],
  name: names[getRandomNumberInRange(0, names.length - 1)]
}));

//Функция создает массив описаний фотографий
const posts = new Array(25).fill(1).map((currentValue, index) => ({
  id: index + 1, //Идентификатор фотографии
  url: `photos/${index + 1}.jpg`, //Адрес картинки
  description: descriptions[getRandomNumberInRange(0, descriptions.length - 1)], //Описание фотографии.
  likes: getLikes(), //Количество лайков, поставленных фотографии.
  comments: new Array(getRandomNumberInRange(5, 10)).fill(1).map(() =>
    comments[getRandomNumberInRange(0, comments.length - 1)])
}));

const isEscapeKey = (evt) => evt.key === 'Escape';
const isEnterKey = (evt) => evt.key === 'Enter';

export {comments, posts, isEscapeKey, getRandomNumberInRange, isEnterKey};
