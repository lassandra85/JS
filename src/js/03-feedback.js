import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const localStorageKey_Form = 'feedback-form-state';

/* if (localStorage.getItem(localStorageKey_Form)) {
  form.elements.email.value = localStorageKey_Form.email;
  form.elements.message.value = localStorageKey_Form.message;
} */
/* console.dir(localStorage.getItem(localStorageKey_Form)); */

form.addEventListener('input', throttle(localStorageSetForm, 500));

function localStorageSetForm(e) {
  localStorage.setItem(
    localStorageKey_Form,
    JSON.stringify({
      email: e.target.value,
      message: e.target.value,
    })
    /*  if (event.target.nodeName === 'INPUT') {
    inputValues.email = event.target.value;
    } else if (event.target.nodeName === 'TEXTAREA') {
    inputValues.message = event.target.value;
    } */
  );
}

form.addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();

  console.log(localStorage.getItem(JSON.parce(localStorageKey_Form)));

  localStorage.clear();

  form.reset();
}
