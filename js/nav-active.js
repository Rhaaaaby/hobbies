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
