const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

function verificarPalpite() {
  const input = document.getElementById('palpite');
  const mensagem = document.getElementById('mensagem');
  const palpite = parseInt(input.value);

  tentativas++;

  if (isNaN(palpite) || palpite < 1 || palpite > 100) {
    mensagem.textContent = "❌ Por favor, digite um número entre 1 e 100.";
    return;
  }

  if (palpite < numeroSecreto) {
    mensagem.textContent = "🔼 Muito baixo!";
  } else if (palpite > numeroSecreto) {
    mensagem.textContent = "🔽 Muito alto!";
  } else {
    mensagem.textContent = `🎉 Parabéns! Você acertou em ${tentativas} tentativas.`;
    input.disabled = true;
  }

  input.value = "";
  input.focus();
}
