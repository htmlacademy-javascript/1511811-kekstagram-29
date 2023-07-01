import {posts} from './util.js';

// Находим шаблон для добавления фото
const templatePicture = document.querySelector('#picture').content.querySelector('.picture');

//создаем фрагмент документа
const fragment = document.createDocumentFragment();

//делаем цикл для прохождения по данным
posts.forEach((post) => {
  const templateClone = templatePicture.cloneNode(true); //клонируем шаблон
  const image = templateClone.querySelector('img');
  image.setAttribute('src', post.url); //подставляем атрибут

  image.setAttribute('alt', post.description);

  const likes = templateClone.querySelector('.picture__likes');
  likes.textContent = post.likes; //выводим кол-во лайков

  const comments = templateClone.querySelector('.picture__comments');
  comments.textContent = post.comments.length; //выводим кол-во комментариев
  fragment.appendChild(templateClone);
});

const pictures = document.querySelector('.pictures'); //находим блок куда будем вставлять фрагмент
pictures.appendChild(fragment); //ставим в конец блока
