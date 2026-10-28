const sigil = document.getElementById("sigil");
const fade = document.querySelector(".scroll-fade");

function updateBackground() {
    const progress = Math.min(
        window.scrollY / window.innerHeight,
        1
    );

    fade.style.opacity = progress;
}

window.addEventListener("scroll", updateBackground, {
    passive: true
});

window.addEventListener("resize", updateBackground);

updateBackground();

sigil.addEventListener("click", () => {
    sigil.classList.remove("replay");
    void sigil.getBoundingClientRect();
    sigil.classList.add("replay");
});