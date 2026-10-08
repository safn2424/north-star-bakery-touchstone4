const bakeryProducts = [
    "Breads",
    "Pastries",
    "Cakes",
    "Signature Loaf"
];

const validationMessages = {
    name: "Please enter your name.",
    email: "Please enter a valid email address.",
    details: "Item details must be at least 5 characters."
};

function saveFavorite(product) {
    if (bakeryProducts.includes(product)) {
        localStorage.setItem("favoriteProduct", product);
        showFavorite(product);
    }
}

function showFavorite(product) {
    const result = document.getElementById("favorite-result");

    if (result) {
        result.textContent = "Your favorite product is: " + product;
    }
}

function loadFavorite() {
    const savedFavorite = localStorage.getItem("favoriteProduct");

    if (savedFavorite) {
        showFavorite(savedFavorite);
    }
}

function setupFavoriteButtons() {
    const buttons = document.querySelectorAll(".favorite-button");

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            const product = button.dataset.product;
            saveFavorite(product);
        });
    });
}

function clearErrors() {
    const errors = document.querySelectorAll(".error-message");

    errors.forEach(function(error) {
        error.textContent = "";
    });
}

function validateForm(event) {
    clearErrors();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const details = document.getElementById("item-details");

    let isValid = true;

    if (name.value.trim() === "") {
        document.getElementById("name-error").textContent =
            validationMessages.name;
        isValid = false;
    }

    if (!email.value.includes("@") || !email.value.includes(".")) {
        document.getElementById("email-error").textContent =
            validationMessages.email;
        isValid = false;
    }

    if (details.value.trim().length < 5) {
        document.getElementById("details-error").textContent =
            validationMessages.details;
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
    }
}

function setupFormValidation() {
    const form = document.getElementById("contact-form");

    if (form) {
        form.addEventListener("submit", validateForm);
    }
}

setupFavoriteButtons();
loadFavorite();
setupFormValidation();