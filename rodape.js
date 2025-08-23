document.addEventListener("DOMContentLoaded", function() {
const form = document.getElementById("formulario");
const input = document.getElementById("email");
const check = document.getElementById("termos");


if (form && input && check) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        if (input.value === "" || !check.checked) {
            alert("Por favor, preencha o campo de email e aceite os termos.");
            return;
        }
        form.reset();
        alert("Obrigado por se inscrever! Você receberá atualizações em breve.");
    });
}
});
