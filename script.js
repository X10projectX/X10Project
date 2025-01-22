// Passwort für die Website
const correctPassword = "1984";

// Elemente auswählen
const loginContainer = document.getElementById("login-container");
const content = document.getElementById("content");
const passwordInput = document.getElementById("password-input");
const loginButton = document.getElementById("login-button");
const errorMessage = document.getElementById("error-message");

// Klick-Event für den Login-Button
loginButton.addEventListener("click", () => {
    const enteredPassword = passwordInput.value;

    if (enteredPassword === correctPassword) {
        // Verstecke Login und zeige den Inhalt
        loginContainer.style.display = "none";
        content.style.display = "block";
    } else {
        // Zeige Fehlermeldung
        errorMessage.style.display = "block";
    }
});
