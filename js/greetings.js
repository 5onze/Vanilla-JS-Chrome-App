const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDEEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function onLoginSubmit(event) {
  event.preventDefault(); // event 기본동작방지(로그인했을때 페이지 새로고침)
  loginForm.classList.add(HIDEEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  const date = new Date();
  const hour = date.getHours();
  let message = '';
  if (hour > 5 && hour < 12) {
    message = `Good morning`;
  } else if (hour == 12 && hour < 17) {
    message = `Good afternoon`;
  } else if (hour == 17 && hour <= 22) {
    message = `Good evening`;
  } else {
    message = `Good night`;
  }
  greeting.innerText = `${message}, ${username}.`;
  greeting.classList.remove(HIDEEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDEEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  // show the greetings
  paintGreetings(savedUsername);
}
