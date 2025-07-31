const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

console.log("🎮 Bem-vindo ao Jogo de Adivinhação!");
console.log("Tente adivinhar o número entre 1 e 100.");

function perguntar() {
  rl.question("Digite seu palpite: ", (resposta) => {
    const palpite = parseInt(resposta);
    tentativas++;

    if (isNaN(palpite)) {
      console.log("❌ Por favor, digite um número válido.");
    } else if (palpite < numeroSecreto) {
      console.log("🔼 Muito baixo!");
    } else if (palpite > numeroSecreto) {
      console.log("🔽 Muito alto!");
    } else {
      console.log(`🎉 Parabéns! Você acertou em ${tentativas} tentativas.`);
      rl.close();
      return;
    }

    perguntar(); // chama novamente
  });
}

perguntar();
