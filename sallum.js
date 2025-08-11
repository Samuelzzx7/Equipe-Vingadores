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

const form = document.getElementById("formulario");
const input = document.getElementById("email");
const check = document.getElementById("termos");


form.addEventListener("submit", function(event) {
    event.preventDefault();
    if (input.value === "" || !check.checked) {
        alert("Por favor, preencha o campo de email e aceite os termos.");
        return;
    }
    form.reset();
    alert("Obrigado por se inscrever! Você receberá atualizações em breve.");
});