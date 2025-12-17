const toggleButton = document.querySelector('#toggle-theme');
const body = document.body;
const savedTheme = localStorage.theme;

if (savedTheme) {
    body.classList.add(savedTheme);
}
toggleButton.addEventListener("click", () => {
    body.classList.toggle("light"); // Ajoute ou enlève la classe "light"
    const theme = body.classList.contains("light") ? "light" : "";
    localStorage.theme = theme; // Sauvegarde le thème dans LocalStorage
});
window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", (event) => {
    body.classList.remove("light");
    localStorage.theme = "";
    if (event.matches) {
        body.classList.add("light");
        localStorage.theme = "light";
    }
});