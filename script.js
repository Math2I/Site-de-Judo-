document.addEventListener("DOMContentLoaded", () => {
    // Seletores de elementos do DOM
    const botaoAcessibilidade = document.getElementById("botao-acessibilidade");
    const opcoesAcessibilidade = document.getElementById("opcoes-acessibilidade");
    const aumentarFonteBotao = document.getElementById("aumentar-fonte");
    const diminuirFonteBotao = document.getElementById("diminuir-fonte");
    const alternarContrasteBotao = document.getElementById("alterna-contraste");
    const body = document.body;

    // Estado inicial de acessibilidade
    let estadoAcessibilidade = {
        fontePadrao: parseFloat(window.getComputedStyle(body).fontSize),
        contrasteAtivado: false,
    };

    /**
     * Alterna a visibilidade do menu de acessibilidade.
     */
    function alternarMenuAcessibilidade() {
        const estaAberto = opcoesAcessibilidade.classList.toggle("apresenta-lista");
        botaoAcessibilidade.setAttribute("aria-expanded", estaAberto);
        botaoAcessibilidade.classList.toggle("rotacao-botao");
    }

    /**
     * Aumenta o tamanho da fonte.
     */
    function aumentarFonte() {
        let tamanhoAtual = parseFloat(window.getComputedStyle(body).fontSize);
        if (tamanhoAtual < estadoAcessibilidade.fontePadrao * 1.5) {
            body.style.fontSize = `${tamanhoAtual + 1}px`;
        }
    }

    /**
     * Diminui o tamanho da fonte.
     */
    function diminuirFonte() {
        let tamanhoAtual = parseFloat(window.getComputedStyle(body).fontSize);
        if (tamanhoAtual > estadoAcessibilidade.fontePadrao * 0.8) {
            body.style.fontSize = `${tamanhoAtual - 1}px`;
        }
    }

    /**
     * Alterna o contraste da página.
     */
    function alternarContraste() {
        body.classList.toggle("contraste");
        estadoAcessibilidade.contrasteAtivado = !estadoAcessibilidade.contrasteAtivado;
        localStorage.setItem("contrasteAtivado", estadoAcessibilidade.contrasteAtivado);
    }

    /**
     * Aplica o estado de acessibilidade salvo no localStorage.
     */
    function aplicarEstadoSalvo() {
        const contrasteSalvo = localStorage.getItem("contrasteAtivado");
        if (contrasteSalvo === "true") {
            body.classList.add("contraste");
            estadoAcessibilidade.contrasteAtivado = true;
        }
    }

    // Event listeners
    botaoAcessibilidade.addEventListener("click", alternarMenuAcessibilidade);
    aumentarFonteBotao.addEventListener("click", aumentarFonte);
    diminuirFonteBotao.addEventListener("click", diminuirFonte);
    alternarContrasteBotao.addEventListener("click", alternarContraste);

    // Carrega o estado de acessibilidade salvo ao carregar a página
    aplicarEstadoSalvo();

    // Adiciona o efeito de revelação com o ScrollReveal
    const sr = ScrollReveal({ reset: true });
    sr.reveal('.inicio-fundo', { duration: 1000, origin: 'left', distance: '50px' });
    sr.reveal('.secao-judo', { duration: 1000, origin: 'bottom', distance: '50px', interval: 200 });
    sr.reveal('#galeria img', { duration: 1000, origin: 'bottom', distance: '50px', interval: 200 });
});