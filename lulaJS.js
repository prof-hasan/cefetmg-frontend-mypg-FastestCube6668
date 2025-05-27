const botao = document.getElementById("botao");
const presente = document.getElementById("presente");
const tampa = document.getElementById("tampa");
const imagem = document.getElementById("imagem");

botao.addEventListener("click", () => {
  presente.style.display = "flex";

  setTimeout(() => {
    tampa.style.transform = "rotateX(-120deg)";
  }, 2000);

  setTimeout(() => {
    imagem.style.display = "block";
  }, 2800);

  setTimeout(() => {
    presente.style.opacity = "0";
  }, 3500);
});