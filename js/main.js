import './util.js';
import './data.js';
import './pictures.js';
import './thumbnails.js';
import './form.js';
import './scale.js';
import './effect.js';
import './api.js';
import {getData} from './api.js';
import {renderPosts} from './thumbnails.js';
import { showAlert } from './util.js';
import { initFilter } from './sort.js';

//загружает данные с сервера и обрабатывает
getData()
  .then((data) => {
    renderPosts(data);
    initFilter(data);
  })
  .catch((err) => showAlert(err.message));
