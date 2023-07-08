// import {pictures} from './thumbnails.js';
import {isEscapeKey, isEnterKey} from './util.js';
// import {pictures} from './thumbnails.js';
// import {comments} from './util.js';

export const userModalElement = document.querySelector('.big-picture');
export const body = document.querySelector('body');
const userModalCloseElement = userModalElement.querySelector('.big-picture__cancel');
export const modalPhoto = document.querySelector('#modalphoto');
export const photoLikesCount = document.querySelector('.likes-count');
export const photoCommentsCount = document.querySelector('.comments-count');
export const photoCommentsList = document.querySelector('.social__comments');
export const photoDescription = document.querySelector('.social__caption');

//отслеживает keydown Escape для вызовa функции закрывающей попап
export const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    userModalElement.classList.add('hidden');
    body.classList.remove('modal-open');
  }
};

//закрывает попап
const closeUserModal = () => {
  userModalElement.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
};

//отслеживает клик для вызова функции закрывающей попап
userModalCloseElement.addEventListener('click', () => {
  closeUserModal();
});

//отслеживает keydown Enter для вызовa функции открывающей попап
userModalCloseElement.addEventListener('keydown', (evt) => {
  if(isEnterKey(evt)) {
    closeUserModal();
  }
});

