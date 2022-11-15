var Body = document.querySelector("body");
let buttonVariable = document.getElementById("toggleButton");
function toggleTheme() {
    Body.classList.toggle("dark-mode");
}
buttonVariable.onclick = ()=>toggleTheme();