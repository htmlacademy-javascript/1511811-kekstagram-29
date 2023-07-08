import {
  isEscapeKey,
  isEnterKey
} from './util.js';

const userModalElement = document.querySelector('.big-picture');
const body = document.querySelector('body');
const userModalCloseElement = userModalElement.querySelector('.big-picture__cancel');
const modalPhoto = document.querySelector('#modalphoto');
const photoLikesCount = document.querySelector('.likes-count');
const photoCommentsCount = document.querySelector('.comments-count');
const photoCommentsList = document.querySelector('.social__comments');
const photoDescription = document.querySelector('.social__caption');

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

export {
  userModalElement,
  body,
  modalPhoto,
  photoLikesCount,
  photoCommentsCount,
  photoCommentsList,
  photoDescription
};
