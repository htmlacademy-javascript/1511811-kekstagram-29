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


getData()
  .then((data) => renderPosts(data))
  .catch((err) => showAlert(err.message));

