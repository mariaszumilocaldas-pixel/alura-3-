
function verificarResposta(resposta) {

    const resultado = document.getElementById("resultado");

    if (resposta === "video") {

        resultado.textContent =
            "Correto! A popularidade dos vídeos muda rapidamente, tornando essa previsão muito volátil.";

        resultado.style.color = "#16834a";

    } else {

        resultado.textContent =
            "Não é essa! A altura dos estudantes tende a variar gradualmente. Tente novamente.";

        resultado.style.color = "#dc4444";

    }
}
