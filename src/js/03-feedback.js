import throttle from 'lodash.throttle';
import { createStorage, getStorage, removeStorage } from './storage-service';

const STORAGE_KEY = 'feedback-form-state';

const formEl = document.querySelector('.feedback-form');
const inputEmailEl = document.querySelector('input');
const textMsgEl = document.querySelector('textarea');

const checkStorage = getStorage(STORAGE_KEY);

if (checkStorage) {
  const { email, message } = checkStorage;
  inputEmailEl.value = email;
  textMsgEl.value = message;
}

formEl.addEventListener(
  'input',
  throttle(e => {
    const { email, message } = e.target.form.elements;

    const data = {
      email: email.value,
      message: message.value,
    };

    createStorage(STORAGE_KEY, data);
  }, 500)
);

formEl.addEventListener('submit', e => {
  e.preventDefault();
  console.log(getStorage(STORAGE_KEY));
  resetForm();
});

function resetForm() {
  inputEmailEl.value = '';
  textMsgEl.value = '';
  removeStorage(STORAGE_KEY);
}
