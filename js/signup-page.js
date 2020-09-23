const signupForm = document.getElementById("signup-form");
const signupButton = document.getElementById("signup-form-submit");
const signupErrorMsg = document.getElementById("signup-error-msg");

signupButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = signupForm.username.value;
    const password = signupForm.password.value;
    const DOB = signupForm.DOB.value;
    const firstName = signupForm.firstName.value;
    const lastName = signupForm.lastName.value;

    if (username != "" && password != "" && DOB != "" && firstName != "" && lastName != "") {
        alert("You have successfully registered!.");
        location.reload();
    } else {
        signupErrorMsg.style.opacity = 1;
    }
})
