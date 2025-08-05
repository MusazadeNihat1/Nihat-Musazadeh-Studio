const burgerCheckbox = document.getElementById("burger");
const navbar = document.getElementById("navbar");

burgerCheckbox.addEventListener("change", () => {
    navbar.classList.toggle("active", burgerCheckbox.checked);
});

