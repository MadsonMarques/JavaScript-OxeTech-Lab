let numeroSorteado;
let tentativas = 0;
let recorde = Infinity;
let melhorJogador = '';

const nomeInput = document.getElementById('nome');
const comecarBtn = document.getElementById('comecarBtn');
const tentarBtn = document.getElementById('tentarBtn');
const jogarNovamenteBtn = document.getElementById('jogarNovamenteBtn');

const inicioSection = document.getElementById('inicio');
const jogoSection = document.getElementById('jogo');
const fimSection = document.getElementById('fim');

const boasVindas = document.getElementById('boasVindas');
const mensagem = document.getElementById('mensagem');
const resultado = document.getElementById('resultado');
const recordeTexto = document.getElementById('recorde');
const palpiteInput = document.getElementById('palpite');

function iniciarJogo() {
  const nome = nomeInput.value.trim();

  if (nome === '') {
    mensagem.textContent = 'Qual o seu nome jogador(a)?';
    return;
  }

  tentativas = 0;
  numeroSorteado = Math.floor(Math.random() * 100) + 1;

  boasVindas.textContent = 'Um número foi sorteado, boa sorte, ' + nome + '!';
  mensagem.textContent = '';
  palpiteInput.value = '';

  inicioSection.classList.add('hidden');
  jogoSection.classList.remove('hidden');

  jogoSection.dataset.jogador = nome;
}

function verificarPalpite() {
  const palpite = Number(palpiteInput.value);

  if (isNaN(palpite) || palpite < 1 || palpite > 100) {
    mensagem.textContent = 'Digite um número entre 1 e 100.';
    return;
  }

  tentativas++;

  if (palpite < numeroSorteado) {
    mensagem.textContent = 'O número sorteado é maior! Tente novamente.';
  } else if (palpite > numeroSorteado) {
    mensagem.textContent = 'O número sorteado é menor! Tente novamente';
  } else {
    exibirResultadoFinal();
  }

  palpiteInput.value = '';
}

function exibirResultadoFinal() {
  const nome = jogoSection.dataset.jogador;
  let elogio = '';

  if (tentativas <= 3) {
    elogio = 'Uau! Você é um(a) gênio da adivinhação! 🧠';
  } else if (tentativas <= 6) {
    elogio = 'Mandou bem! Você foi rápido! 🚀';
  } else {
    elogio = 'Persistência é tudo! 💪';
  }

  resultado.innerHTML = `Parabéns, <strong>${nome}</strong>!<br>
    Você acertou em ${tentativas} tentativa(s).<br>${elogio}`;

  if (tentativas < recorde) {
    recorde = tentativas;
    melhorJogador = nome;
  }

  recordeTexto.textContent = `🏅 Melhor jogador: ${melhorJogador || '-'} (${recorde} tentativa(s))`;

  jogoSection.classList.add('hidden');
  fimSection.classList.remove('hidden');
}

function jogarNovamente() {
  fimSection.classList.add('hidden');
  inicioSection.classList.remove('hidden');
  nomeInput.value = '';
  palpiteInput.value = '';
  mensagem.textContent = '';
}

comecarBtn.addEventListener('click', iniciarJogo);
tentarBtn.addEventListener('click', verificarPalpite);
jogarNovamenteBtn.addEventListener('click', jogarNovamente);