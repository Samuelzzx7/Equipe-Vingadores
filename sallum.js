const button = document.getElementById("aqui");
const fechar = document.getElementById("fechar");
const article = document.getElementById("sallum");
const novoMembro = document.getElementById("novoMembro");

button.addEventListener("click", () => {
    article.style.display = "block";
    novoMembro.style.display = "none";
})

fechar.addEventListener("click", () => {
    article.style.display = "none";
    novoMembro.style.display = "block";
})