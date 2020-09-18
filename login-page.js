const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

function hideElement() {
  var x = document.getElementById("login-form");
  var y =document.getElementById("button") 
  if (x.style.display === "grid") {
    x.style.display = "none";
  } else {
    x.style.display = "grid"
    y.style.display = "none";
  }
}

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "web_dev") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
