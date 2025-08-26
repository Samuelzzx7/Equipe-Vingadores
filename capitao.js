const fim = document.getElementById("fim");
const video = document.getElementById("video");
const fechar = document.getElementById("fechar");
const meuVideo = document.getElementById("meuVideo");

meuVideo.pause();

fim.addEventListener("click", () => {
    video.style.display = "block";
    fim.style.display = "none";
})

fechar.addEventListener("click", () => {
    video.style.display = "none";
    fim.style.display = "block";
})

