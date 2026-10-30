const navigationLinks = document.querySelectorAll("header a[href^='#']");

function updateActiveLink() {
  navigationLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === window.location.hash;
    link.classList.toggle("ativo", isActive);

    if (isActive) {
      link.setAttribute("aria-current", "location");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

navigationLinks.forEach((link) => {
  link.addEventListener("click", () => {
    window.setTimeout(updateActiveLink, 0);
  });
});

window.addEventListener("hashchange", updateActiveLink);
updateActiveLink();


const button = document.getElementById("menuToggle");
const menu = document.getElementById("mobileMenu");
const header = button.closest("header");

function setMenuOpen(open) {
    menu.classList.toggle("active", open);
    header.classList.toggle("menu-open", open);
    button.classList.toggle("active", open);
    button.setAttribute("aria-expanded", String(open));
    button.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
}

button.addEventListener("click", () => {
    setMenuOpen(!menu.classList.contains("active"));
});

menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
});
