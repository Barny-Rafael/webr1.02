function changerStyle() {
  const theme = document.getElementById("theme");

  if (theme.getAttribute("href") === "styles/style_noir.css") {
    theme.setAttribute("href", "styles/style.css");
  } else {
    theme.setAttribute("href", "styles/style_noir.css");
  }
}
