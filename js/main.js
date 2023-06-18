//Oписание фотографии.
const specification = [
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

const message = [
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

//Возвращает рандомное число
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

//Диапазон значений лайков
const minLikesAmount = 15;
const maxLikesAmount = 200;

//Функция возвращает количество лайков
const getLikes = () => Math.floor(Math.random() * (maxLikesAmount - minLikesAmount + 1)) + minLikesAmount;

const minAvatarNumber = 1;
const maxAvatarNumber = 6;

//Функция возвращает номер аватара
const getAvatarNumber = () => Math.floor(Math.random() * (maxAvatarNumber - minAvatarNumber + 1)) + minAvatarNumber;

//создает массив из списка комментаторов
const createCommentUser = new Array(30).fill(1).map((currentValue, index) => ({
  id: index + 1,
  avatar: `img/avatar-${getAvatarNumber()}.svg`,
  message: message[getRandomInteger(0, message.length - 1)],
  name: names[getRandomInteger(0, names.length - 1)]
}));

//создает массив описаний фотографий
const createPost = new Array(25).fill(1).map((currentValue, index) => ({
  id: index + 1, //Идентификатор фотографии
  url: `photos/${index + 1}.jpg`, //Адрес картинки
  description: specification[getRandomInteger(0, specification.length - 1)], //Описание фотографии.
  likes: getLikes(), //Количество лайков, поставленных фотографии.
  comments: createCommentUser[getRandomInteger(0, message.length - 1)]
}));
createPost();
