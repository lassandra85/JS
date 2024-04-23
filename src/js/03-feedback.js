import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const localStorageKey_Form = 'feedback-form-state';
const localStorageInput =
  JSON.parse(localStorage.getItem(localStorageKey_Form)) || {};

form.elements.email.value = localStorageInput.email || '';
form.elements.message.value = localStorageInput.message || '';

form.addEventListener('input', throttle(localStorageSetForm, 500));

function localStorageSetForm(e) {
  if (e.target.nodeName === 'INPUT') {
    localStorageInput.email = e.target.value;
  } else if (e.target.nodeName === 'TEXTAREA') {
    localStorageInput.message = e.target.value;
  }
  localStorage.setItem(localStorageKey_Form, JSON.stringify(localStorageInput));
}

form.addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();

  console.log(localStorageInput);

  localStorage.clear();

  form.reset();

  localStorageInput = {};
}
