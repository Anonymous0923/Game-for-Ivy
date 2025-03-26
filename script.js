document.addEventListener("DOMContentLoaded", function() {
    let yesBtn = document.getElementById("yes-btn");
    let noBtn = document.getElementById("no-btn");

    yesBtn.addEventListener("click", function() {
        window.location.href = "survey.html";
    });

    noBtn.addEventListener("click", function() {
        document.body.style.background = "black";
        alert("Sad cat meme will appear here.");
    });
});