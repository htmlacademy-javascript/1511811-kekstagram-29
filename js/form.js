import {isEscapeKey} from './util.js';
import {body} from './pictures.js';
import {resetScale} from './scale.js';
import { sendData } from './api.js';
import { effectSlider } from './effect.js';

const uploadForm = document.querySelector('.img-upload__form');
const editImageField = document.querySelector('.img-upload__overlay');
const uploadImageField = document.querySelector('.img-upload__input');
const buttonCloseUploadImageField = document.querySelector('.img-upload__cancel');
const errorUploadImage = document.querySelector('#error').content.querySelector('.error');
const successUploadImage = document.querySelector('#success').content.querySelector('.success');
const hashtagField = document.querySelector('.text__hashtags');
const descriptionField = document.querySelector('.text__description');
const formSubmitButton = document.querySelector('#upload-submit');

const errorPopup = errorUploadImage.cloneNode(true);
const successPopup = successUploadImage.cloneNode(true);

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'span',
  errorTextClass: 'form__error',
});

//Закрытие формы редактирования изображения по Escape
const onDocumentEsc = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    editImageField.classList.add('hidden');
    body.classList.remove('modal-open');
  }
};

const onUploadImagePopupEsc = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    errorPopup.remove();
  }
};

//убирает окно с ошибкой загрузки
const exitErrorPopup = () => {
  errorPopup.remove();
  document.removeEventListener('keydown', onUploadImagePopupEsc);
};

//открывает окно с ошибкой загрузки
const openErrorPopup = () => {
  const errorButton = errorPopup.querySelector('.error__button');
  body.append(errorPopup);
  errorButton.addEventListener('click', exitErrorPopup);
};

//убирает окно с успешной загрузкой
const removeSuccessPopup = () => {
  uploadForm.reset();
  successPopup.remove();
  editImageField.classList.add('hidden');
  document.removeEventListener('keydown', onUploadImagePopupEsc);
};

//открывает окно с успешной загрузкой
const openSuccessPopup = () => {
  const successButton = successPopup.querySelector('.success__button');
  body.append(successPopup);
  successButton.addEventListener('click', removeSuccessPopup);
};

//длина комментария не может составлять больше 140 символов;
const validateDescription = (value) => value.trim().length <= 140;

//Проверяет количество хэштегов (не более пяти)
// хэш-теги нечувствительны к регистру: #ХэшТег и #хэштег считаются одним и тем же тегом;

const validateHashtag = (value) => {
  const hashtags = value.toLowerCase().split(' ');
  if (hashtags.length > 5) {
    return false;
  }

  //один и тот же хэш-тег не может быть использован дважды
  const uniqueHashtag = new Set(hashtags);
  if (uniqueHashtag.size !== hashtags.length) {
    return false;
  }
  // хэш-тег начинается с символа # (решётка);
  // хеш-тег не может состоять только из одной решётки;???
  //строка после решётки должна состоять из букв и чисел и не может
  //содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации
  //(тире, дефис, запятая и т. п.), эмодзи и т. д.;
  // максимальная длина одного хэш-тега 20 символов, включая решётку;
  // хэш-теги разделяются пробелами;
  const regex = /^#[a-zA-Zа-я0-9]{1,19}$/;
  const hasValidCharacters = hashtags.every((hashtagItem) => regex.test(hashtagItem));
  return hasValidCharacters;
};

// если фокус находится в поле ввода хэш-тега, нажатие на Esc
//не должно приводить к закрытию формы редактирования изображения.
hashtagField.addEventListener('focus', () => {
  document.removeEventListener('keydown', onDocumentEsc);
});

hashtagField.addEventListener('blur', () => {
  document.addEventListener('keydown', onDocumentEsc);
});

//если фокус находится в поле ввода комментария, нажатие на Esc не должно приводить
//к закрытию формы редактирования изображения.
descriptionField.addEventListener('focus', () => {
  document.removeEventListener('keydown', onDocumentEsc);
});

descriptionField.addEventListener('blur', () => {
  document.addEventListener('keydown', onDocumentEsc);
});


pristine.addValidator(descriptionField, validateDescription, 'ошибка');
pristine.addValidator(hashtagField, validateHashtag);

//открытие формы редактирования изображения
const openUploadImageForm = () => {
  editImageField.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentEsc);
};
//сброс формы
const resetForm = () => {
  uploadForm.reset();
  effectSlider.noUiSlider.reset();
};

//закрытие формы редактирования изображения
const closeUploadImageForm = () => {
  resetForm();
  resetScale();
  pristine.reset();
  editImageField.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentEsc);
};

uploadImageField.addEventListener('change', () => {
  openUploadImageForm();
});

buttonCloseUploadImageField.addEventListener('click', () => {
  closeUploadImageForm();
});

editImageField.addEventListener('keydown', (evt) => {
  if(isEscapeKey(evt)) {
    closeUploadImageForm();
  }
});

const blockSubmitButton = () => {
  formSubmitButton.textContent = 'Отправляется';
  formSubmitButton.disabled = true;
};

//проверка загруженной для редактирования формы
uploadForm.addEventListener('submit', (evt) =>{
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    const data = new FormData(uploadForm);
    blockSubmitButton();
    sendData(data)
      .then(() => {
        openSuccessPopup();
        resetForm();
      });
  } else {
    openErrorPopup();
  }
});

// function closeImageLoadModal () {
//   uploadForm.reset();
//   document.body.classList.remove('modal-open');
//   editImageField.classList.add('hidden');
//   document.removeEventListener('keydown', onDocumentEsc);

//   setTimeout(() => {
//     uploadForm.remove();
//   }, 5000);
// }

