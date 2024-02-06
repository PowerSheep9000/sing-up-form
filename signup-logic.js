const form = document.querySelector("form");
const pwd = document.getElementById("pwd");
const pwdError = document.getElementById("error1");
const pwdConfirm = document.getElementById("pwd-confirm");
const pwdConfirmError = document.getElementById("error2");

pwd.addEventListener("input", () => {
    if (pwd.validity.valid) {
        pwdError.textContent = "";
        pwdError.className = "error";
        pwdError.style.display = "none";
    } else {
        showError();
    }
});

pwdConfirm.addEventListener("input", () => {
    if (!(pwdConfirm.value == pwd.value)) {
        showConfirmError();
    } else {
        pwdConfirmError.textContent = "";
        pwdConfirmError.className = "error";
        pwdConfirmError.style.display = "none";
    }

    if (pwdConfirm.value == "") {
        pwdConfirmError.textContent = "";
        pwdConfirmError.className = "error";
        pwdConfirmError.style.display = "none";
    }
});

/*form.addEventListener("submit", (event) => {
    if (!pwd.validity.valid) {
        showError();
        event.preventDefault();
    }
});*/

function showError() {
    if (pwd.validity.tooShort) {
        pwdError.style.display = "initial";
        pwdError.textContent = "Password is too short";
    }
    pwdError.className = "error active";
}

function showConfirmError() {
    pwdConfirmError.style.display = "initial";
    pwdConfirmError.textContent = "Input does not match password"
    pwdConfirmError.className = "error active";
}