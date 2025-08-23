const icone = document.getElementById("mobile-menu");
const menu = document.getElementById("menu");

icone.addEventListener("click", () => {
    menu.classList.add("animar");
    menu.classList.toggle("active");
})

window.addEventListener("resize", () => {
    menu.classList.remove("animar");
})