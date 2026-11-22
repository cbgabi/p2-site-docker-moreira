
/* MOREIRA AUTO ELÉTRICA MÓVEL
   Funcionalidade interativa do site
*/

document.addEventListener("DOMContentLoaded", function () {

    const botao = document.getElementById("botao-mensagem");
    const mensagem = document.getElementById("mensagem");

    botao.addEventListener("click", function () {

        if (mensagem.textContent === "") {
            mensagem.textContent =
                "⚡ Moreira Auto Elétrica Móvel: confiança é o nosso trabalho! Atendimento 24 horas em MS e SP.";

            botao.textContent = "Ocultar mensagem";
        } else {
            mensagem.textContent = "";
            botao.textContent = "Ver mensagem da oficina";
        }

    });

});
