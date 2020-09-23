const signupForm = document.getElementById("signup-form");
const signupButton = document.getElementById("singup-form-submit");
const signupErrorMsg = document.getElementById("signup-error-msg");

signupButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = signupForm.username.value;
    const password = signupForm.password.value;

    if (username === "user" && password === "web_dev") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        signupErrorMsg.style.opacity = 1;
    }
})
