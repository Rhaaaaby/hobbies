const sigil = document.getElementById("sigil");

    sigil.addEventListener("click", () => {
      sigil.classList.remove("replay");
      void sigil.getBoundingClientRect();
      sigil.classList.add("replay");
    });