document.addEventListener('DOMContentLoaded', () => {
  const btn = id => document.getElementById(id);
  const toggle = (el, cls) => el.classList.toggle(cls);

  const botao = btn('botao-acessibilidade'),
        opcoes = btn('opcoes-acessibilidade'),
        aMais = btn('aumentar-fonte'),
        aMenos = btn('diminuir-fonte'),
        contraste = btn('alterna-contraste');

  let fonte = 1;

  botao.onclick = () => {
    toggle(botao, 'rotacao-botao');
    toggle(opcoes, 'apresenta-lista');
    botao.setAttribute('aria-expanded', !(botao.getAttribute('aria-expanded') === 'true'));
  };

  aMais.onclick = () => document.body.style.fontSize = `${(fonte += 0.1).toFixed(1)}rem`;
  aMenos.onclick = () => document.body.style.fontSize = `${(fonte -= 0.1).toFixed(1)}rem`;
  contraste.onclick = () => toggle(document.body, 'alto-contraste');
});

// ScrollReveal
['#inicio', '#tropicalia', '#galeria', '#contato'].forEach(id =>
  ScrollReveal().reveal(id, { delay: 500 })
);