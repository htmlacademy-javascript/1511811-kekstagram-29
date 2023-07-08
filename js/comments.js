// import { photoCommentsCount } from './pictures.js';
import { comments } from './util.js';
// import { photoCommentsCount } from './pictures.js';

// import {comments} from './util';
const COMMENTS_STEP = 5;

let commentsShown = 0;

//куда вставлять комментарии
const commContainer = document.querySelector('.social__comments');
//доступ к шаблону списка комментариев
const commTemplate = document.querySelector('#comment').content.querySelector('.social__comment');

const commentsCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');

//Отображает комментарии
const renderComment = (comment, listFragment) => {
  const comElement = commTemplate.cloneNode(true);
  comElement.querySelector('.social__picture').src = comment.avatar;
  comElement.querySelector('.social__picture').alt = comment.name;
  comElement.querySelector('.social__text').textContent = comment.message;
  listFragment.appendChild(comElement);
};

const renderComments = () => {
  const listFragment = document.createDocumentFragment();
  comments.slice(0, commentsShown).forEach((comment) => { //проходим по массиву с комментариями и рендерим комменты
    renderComment(comment, listFragment);
  });
  commContainer.replaceChildren(); //обнуляем комменты
  commContainer.appendChild(listFragment); //в контейнер ставим фрагмент с комментами
};

const onCommentsLoaderClick = () => {
  commentsShown += COMMENTS_STEP;
  if (commentsShown >= comments.length) {
    commentsLoader.classList.add('hidden');
    commentsShown = comments.length;
  } else {
    commentsLoader.classList.remove('hidden');
  }
  renderComments();

  commentsCount.textContent = commentsShown;
};

const resetCommentShown = () => {
  commentsShown = 0;
};

commentsLoader.addEventListener('click', onCommentsLoaderClick);
export {
  commentsLoader,
  commentsCount,
  resetCommentShown,
  onCommentsLoaderClick
};
