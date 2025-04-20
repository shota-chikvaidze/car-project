const input = document.getElementById("email_signin");
const divNextBtn = document.getElementById("next_btn");

function updateButton() {
    divNextBtn.innerHTML = "";

    const btn = document.createElement("button");
    btn.className = input.value.trim() === "" ? "button_disabled" : "button_not_disabled";
    btn.textContent = input.value.trim() === "" ? "Next" : "Next";

    divNextBtn.appendChild(btn);
}

input.addEventListener("input", updateButton);
updateButton();




function registerSignInChange(event) {
    event.preventDefault();

    const registerForm = document.getElementById("register");
    const signInForm = document.getElementById("signIn");

    if (window.getComputedStyle(registerForm).display === "none") {
        registerForm.style.display = "block";
        signInForm.style.display = "none";
    } else {
        registerForm.style.display = "none";
        signInForm.style.display = "block";
    }
}

const createBtn = document.getElementById("create_acc");
createBtn.addEventListener("click", registerSignInChange);



function registerSignInChangeBack(event) {
    event.preventDefault();

    const registerForm = document.getElementById("register");
    const signInForm = document.getElementById("signIn");
    
    if (window.getComputedStyle(registerForm).display === "none") {
        registerForm.style.display = "block";
        signInForm.style.display = "none";
    } else {
        registerForm.style.display = "none";
        signInForm.style.display = "block";
    }
}


const signInBtn = document.getElementById("goBackSignIn")
signInBtn.addEventListener("click", registerSignInChangeBack);



