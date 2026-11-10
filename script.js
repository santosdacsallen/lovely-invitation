
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const buttonArea = document.querySelector(".button-area");

const question = document.getElementById("question");
const message = document.getElementById("message");

let yesScale = 1;

// MOVE THE NO BUTTON
function moveNoButton() {

    const areaWidth = buttonArea.clientWidth;
    const areaHeight = buttonArea.clientHeight;

    const noWidth = noButton.offsetWidth;
    const noHeight = noButton.offsetHeight;

    const maxX = areaWidth - noWidth;
    const maxY = areaHeight - noHeight;

    let randomX;
    let randomY;

    // Find a position that doesn't overlap YES
    const areaRect = buttonArea.getBoundingClientRect();
    const yesRect = yesButton.getBoundingClientRect();

    const yesX = yesRect.left - areaRect.left;
    const yesY = yesRect.top - areaRect.top;

    const yesW = yesRect.width;
    const yesH = yesRect.height;

    for (let i = 0; i < 50; i++) {

        randomX = Math.random() * maxX;
        randomY = Math.random() * maxY;

        const overlaps =
            randomX < yesX + yesW + 15 &&
            randomX + noWidth + 15 > yesX &&
            randomY < yesY + yesH + 15 &&
            randomY + noHeight + 15 > yesY;

        if (!overlaps) {
            break;
        }
    }

    // Change the NO button position
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";

    noButton.style.transform = "none";

    // Make the YES button bigger
    yesScale += 0.15;

    if (yesScale > 2.5) {
        yesScale = 2.5;
    }

    yesButton.style.transform =
        `translate(-50%, -50%) scale(${yesScale})`;
}


// DESKTOP: Move when mouse approaches
noButton.addEventListener("pointerenter", function(event) {

    if (event.pointerType === "mouse") {
        moveNoButton();
    }

});


// MOBILE: Move when she touches the NO button
noButton.addEventListener("touchstart", function(event) {

    event.preventDefault();
    moveNoButton();

}, { passive: false });


// Prevent clicking NO using keyboard or other input
noButton.addEventListener("click", function(event) {

    event.preventDefault();
    moveNoButton();

});


// WHEN SHE CLICKS YES
yesButton.addEventListener("click", function() {

    question.innerHTML = "YAAAAAY!! 💗🥰";

    message.innerHTML =
        "lezgow libre mo ako 💕🌷 ";

    // Hide both buttons
    yesButton.style.display = "none";
    noButton.style.display = "none";

    // Update footer
    document.querySelector(".footer-text").innerHTML =
        "I LOVE YOU! ♡";

    // Add a little celebration
    document.querySelector(".cute-decoration").innerHTML =
        "💗 🎀 💗 🎉 💗";

});
