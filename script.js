// Passwortschutz
const correctPassword = "1984";
const loginContainer = document.getElementById("login-container");
const mainContent = document.getElementById("main-content");
const passwordInput = document.getElementById("password-input");
const loginButton = document.getElementById("login-button");
const errorMessage = document.getElementById("error-message");

loginButton.addEventListener("click", () => {
    const enteredPassword = passwordInput.value;

    if (enteredPassword === correctPassword) {
        loginContainer.style.display = "none";
        mainContent.style.display = "flex";
    } else {
        errorMessage.style.display = "block";
        setTimeout(() => {
            errorMessage.style.display = "none";
        }, 2000);
    }
});

// Dark/Light Mode Umschaltung
const lightModeButton = document.getElementById("light-mode");
const darkModeButton = document.getElementById("dark-mode");

function activateLightMode() {
    document.body.classList.remove("dark-mode");
    lightModeButton.classList.add("active");
    darkModeButton.classList.remove("active");
}

function activateDarkMode() {
    document.body.classList.add("dark-mode");
    darkModeButton.classList.add("active");
    lightModeButton.classList.remove("active");
}

// Standardmodus
activateLightMode();

lightModeButton.addEventListener("click", activateLightMode);
darkModeButton.addEventListener("click", activateDarkMode);
