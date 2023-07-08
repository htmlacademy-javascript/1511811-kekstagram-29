// import { photoCommentsCount } from './pictures.js';
import { comments } from './util.js';
// import { photoCommentsCount } from './pictures.js';

// import {comments} from './util';
const COMMENTS_STEP = 5;

export let commentsShown = 0;
// const allComments = [];

//куда вставлять комментарии
const commContainer = document.querySelector('.social__comments');
//доступ к шаблону списка комментариев
const commTemplate = document.querySelector('#comment').content.querySelector('.social__comment');

export const commentsCount = document.querySelector('.social__comment-count');
export const commentsLoader = document.querySelector('.comments-loader');

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

export const onRenderComments = renderComments;

//действия с кнопкой "Загрузить ещё"
export const buttonDownloadMoreComments = document.querySelector('.social__comments-loader');

const renderAllComments = () => {
  commentsShown += COMMENTS_STEP;
  if (commentsShown >= comments.length) {
    commentsLoader.classList.add('hidden');
    commentsShown = comments.length;
  } else {
    commentsLoader.classList.remove('hidden');
  }
  onRenderComments();

  // commentsLoader.innerHTML = '';
  // commentsLoader.append(fragment);
  commentsCount.textContent = commentsShown;
  // photoCommentsCount.textContent = comments.length;
};
export const onCommentsLoaderClick = () => renderAllComments();
commentsLoader.addEventListener('click', onCommentsLoaderClick);

export{renderComment};
