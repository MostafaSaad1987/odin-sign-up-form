const errorText = document.querySelector("#error");

const passField = document.querySelector("#pass");
const confirmPassword = document.querySelector("#conPass");

const submitButton = document.querySelector("button");

const numberReg = /\d{10}/g;


confirmPassword.addEventListener("input", (event) => { CheckPassword(); });
passField.addEventListener("input", (event) => { CheckPassword(); });

function CheckPassword() {
    if (passField.value != confirmPassword.value) {
        passField.classList.add("passError");
        confirmPassword.classList.add("passError");

        errorText.textContent = "* Passwords do not match.";

        submitButton.disabled = true;
    } else {
        passField.classList.remove("passError");
        confirmPassword.classList.remove("passError");

        errorText.textContent = "";
        submitButton.disabled = false;
    }
}

CheckPassword();