function changerStyle() {
    const theme = document.getElementById("theme");

    if (theme.getAttribute("href") === "styles/accueil_blanc.css") {
        theme.setAttribute("href", "styles/accueil.css");
    } else {
        theme.setAttribute("href", "styles/accueil_blanc.css");
    }
}
