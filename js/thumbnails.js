import {posts} from './util.js';
import {userModalElement, modalPhoto, body, onPopupEscKeydown, photoLikesCount, photoCommentsCount, photoDescription} from './pictures.js';
import {
  commentsCount,
  commentsLoader,
  onCommentsLoaderClick,
  resetCommentShown
} from './comments.js';
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

  templateClone.addEventListener('click', () => {
    modalPhoto.src = post.url;
    photoLikesCount.textContent = post.likes;
    photoCommentsCount.textContent = post.comments.length;
    photoDescription.textContent = post.description;
    resetCommentShown();
    onCommentsLoaderClick();
    userModalElement.classList.remove('hidden'); //убираем класс у секции просмотра изображения
    body.classList.add('modal-open'); //добавляем модальное окно чтобы не было скроллинга
    commentsCount.classList.remove('hidden');
    commentsLoader.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscKeydown);
  });
  fragment.appendChild(templateClone);
});
const pictures = document.querySelector('.pictures'); //находим блок куда будем вставлять фрагмент
pictures.appendChild(fragment); //ставим в конец блока

export {pictures};
