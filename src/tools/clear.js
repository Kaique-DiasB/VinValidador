function Clean() {
  const inputs = document.querySelectorAll('.Types input[type="text"]');
  inputs.forEach((input) => {
    input.value = "";
  });

  const resultados = document.querySelectorAll(".Types .result");
  resultados.forEach((resultado) => {
    resultado.textContent = "";
    resultado.style.color = "";
  });
}
