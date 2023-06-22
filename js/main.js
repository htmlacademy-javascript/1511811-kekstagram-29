//Oписание фотографии.
const descriptions = [
  'Лицо человека, вышедшего из матрицы',
  'В этот день родили меня на свет...',
  'Если не поставишь лайк, я тебя найду!',
  'Аниме, пацаны?',
  'Тот момент, когда не ожидаешь',
  'Просто вчера на все 100',
  'Подумал, что не хватит, купил ещё',
  'Мой лучший друг идиот',
  'Не поделили еду с котом',
];

//Сообщения от комментатора
const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const names = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

//Функция возвращает рандомное число в необходимом диапазоне
const getRandomNumberInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

//Функция возвращает количество лайков
const minLikesAmount = 15;
const maxLikesAmount = 200;
const getLikes = () => getRandomNumberInRange(minLikesAmount, maxLikesAmount);

const minAvatarNumber = 1;
const maxAvatarNumber = 6;

//Функция возвращает номер аватара
const getAvatarNumber = () => getRandomNumberInRange(minAvatarNumber, maxAvatarNumber);

//создает массив из списка комментаторов
const comments = new Array(30).fill(1).map((currentValue, index) => ({
  id: index + 1,
  avatar: `img/avatar-${getAvatarNumber()}.svg`,
  message: messages[getRandomNumberInRange(0, messages.length - 1)],
  name: names[getRandomNumberInRange(0, names.length - 1)]
}));

//создает массив описаний фотографий
const posts = new Array(25).fill(1).map((currentValue, index) => ({
  id: index + 1, //Идентификатор фотографии
  url: `photos/${index + 1}.jpg`, //Адрес картинки
  description: descriptions[getRandomNumberInRange(0, descriptions.length - 1)], //Описание фотографии.
  likes: getLikes(), //Количество лайков, поставленных фотографии.
  comments: comments[getRandomNumberInRange(0, messages.length - 1)]
}));
posts();
