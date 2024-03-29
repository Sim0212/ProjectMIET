var logIn = document.getElementById("login");
var register = document.getElementById("register");
var button = document.getElementById("btn");

function registration() {
  logIn.style.left = "-400px";
  register.style.left = "50px";
  button.style.left = "110px";
}

function login() {
  logIn.style.left = "50px";
  register.style.left = "450px";
  button.style.left = "0";
}
