import throttle from 'lodash.throttle';

const KEY_FOR_STORE = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

const { email, message } = form.elements


const data = {};

readDataFromLocalStorage();

form.addEventListener('submit', onSubmitForm);
form.addEventListener('input', throttle(onInputForm, 500));

//=========================================//
function onInputForm(event) {
  data[event.target.name] = event.target.value;
  localStorage.setItem(KEY_FOR_STORE, JSON.stringify(data));
}

//========================================//
function onSubmitForm(event) {
  event.preventDefault();

  const myInputElement = email.value;
  const myMessageElement = message.value;
  if (!myInputElement || !myMessageElement) {
    alert('Please enter your email address and message !');
    return false;
  }

  console.log(data);

  form.reset();
  localStorage.removeItem(KEY_FOR_STORE);
}

//=====================================//

function readDataFromLocalStorage() {
  let playerSettings = null;
  const dataStr = localStorage.getItem(KEY_FOR_STORE);

  if (dataStr) {
    try {
      playerSettings = JSON.parse(dataStr);
    } catch (error) {
      console.error('Set state error: ', error.message);
      return;
    }
     email.value = playerSettings.email;
     message.value = playerSettings.message;
  }
}


