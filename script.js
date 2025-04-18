// Função que mostra a mensagem de amor ao clicar no botão
function mostrarMensagem() {
  const mensagem = document.getElementById("mensagem");
  mensagem.innerText = "Te amo mais do que palavras podem dizer! 💖 Obrigado por fazer parte da minha vida!";
}

// Função de chuva de emojis
function criarEmoji() {
  const emoji = document.createElement('div');
  emoji.innerText = '💖';
  emoji.classList.add('emoji');
  emoji.style.left = Math.random() * 100 + 'vw';
  emoji.style.animationDuration = Math.random() * 2 + 3 + 's';

  document.body.appendChild(emoji);

  setTimeout(() => {
    emoji.remove();
  }, 5000);
}

setInterval(criarEmoji, 500);
