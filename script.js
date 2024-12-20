document.addEventListener("DOMContentLoaded", function () {
    const lightModeButton = document.querySelector("button.bg-gray-300");

    lightModeButton.addEventListener("click", function () {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    });
});
