
function atualizaContador(index) {
    const agora = new Date();
    const fimDoAno = new Date(agora.getFullYear(), 11, 31, 23, 59, 59);
    const diff = fimDoAno - agora;

    const segundos = Math.floor((diff / 1000) % 60);
    const minutos = Math.floor((diff / 1000 / 60) % 60);
    const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));

    document.getElementById("dias" + index).textContent = dias;
    document.getElementById("horas" + index).textContent = horas;
    document.getElementById("min" + index).textContent = minutos;
    document.getElementById("seg" + index).textContent = segundos;
}

function iniciarContadores() {
    const contadores = document.querySelectorAll(".contador");
    contadores.forEach((_, index) => {
        atualizaContador(index);
        setInterval(() => atualizaContador(index), 1000);
    });
}

function alternarAbas() {
    const botoes = document.querySelectorAll(".botao");
    const abas = document.querySelectorAll(".aba-conteudo");

    botoes.forEach((botao, index) => {
        botao.addEventListener("click", () => {
            document.querySelector(".botao.ativo").classList.remove("ativo");
            botao.classList.add("ativo");

            document.querySelector(".aba-conteudo.ativo").classList.remove("ativo");
            abas[index].classList.add("ativo");
        });
    });
}

function salvarProgressoCheckboxes() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox, index) => {
        const checked = localStorage.getItem("checkbox_" + index);
        checkbox.checked = checked === "true";

        checkbox.addEventListener("change", () => {
            localStorage.setItem("checkbox_" + index, checkbox.checked);
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    iniciarContadores();
    alternarAbas();
    salvarProgressoCheckboxes();
});


function somAoMarcarCheckbox() {
    const som = document.getElementById("somCheckbox");
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                som.currentTime = 0;
                som.play();
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    somAoMarcarCheckbox();
});
