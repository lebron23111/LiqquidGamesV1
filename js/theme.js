// List of themes
const themes = ["theme-dark","theme-light","theme-sunset","theme-ocean","theme-neon"];
const themeContainer = document.getElementById("themeOptions");

themes.forEach(theme => {
  const btn = document.createElement("button");
  btn.textContent = theme.replace("theme-","");
  btn.onclick = () => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  };
  themeContainer.appendChild(btn);
});

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if(savedTheme) document.body.className = savedTheme;
