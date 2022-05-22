const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const loginForm = document.querySelector("#login-form");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  //console.log(info);
  //console.log(loginInput.value);
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  console.log(username);
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);

  //   if (username === "") {
  //     alert("Please write your name");
  //   } else if (username.length > 15) {
  //     alert("your name is too long.");
  //   }
}

//loginButton.addEventListener("click", onLoginBtnClick);

function handleLInkClick(event) {
  event.preventDefault();
  //alert("clicked!");
  console.log(event);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

link.addEventListener("click", handleLInkClick);

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
  console.log(`null ${savedUsername}`);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  console.log(savedUsername);
  paintGreetings(savedUsername);
}
