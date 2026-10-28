const gabarito = {
  q1: "4",
  q2: "quadrado",
  q3: "losango",
  q4: "360",
  q5: "retangulo",
  q6: "paralelogramo",
  q7: "25",
  q8: "28",
  q9: "trapezio",
  q10: "24",
  q11: "2",
  q12: "retangulo"
};

function corrigirQuiz() {
  let pontos = 0;
  let respondidas = 0;

  for (const pergunta in gabarito) {
    const marcada = document.querySelector(
      'input[name="' + pergunta + '"]:checked'
    );

    if (marcada) {
      respondidas++;

      if (marcada.value === gabarito[pergunta]) {
        pontos++;
      }
    }
  }

  const resultado = document.getElementById("resultado");
  resultado.style.display = "block";

  if (respondidas < 12) {
    resultado.textContent =
      "Você respondeu " + respondidas +
      " de 12 questões. Complete as restantes e corrija novamente.";
  } else {
    const porcentagem = Math.round((pontos / 12) * 100);
    let mensagem;

    if (pontos === 12) {
      mensagem = "Excelente! Você acertou todas!";
    } else if (pontos >= 9) {
      mensagem = "Muito bem! Revise os pontos em que teve dúvida.";
    } else {
      mensagem = "Continue estudando as seções e tente novamente.";
    }

    resultado.textContent =
      "Você acertou " + pontos + " de 12 questões (" +
      porcentagem + "%). " + mensagem;
  }

  resultado.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
}
