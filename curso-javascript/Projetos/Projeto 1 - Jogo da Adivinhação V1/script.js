alert('Bem vindo(a) ao Jogo da Adivinhação!');
let nome = prompt('Qual seu nome, jogador(a)?');
let recorde = Infinity;
let melhorJogador = ''; 

while (true) {
    if (nome === null) {
        alert('Jogo encerrado');
        break;
    }

    let numeroSorteado = Math.ceil(Math.random() * 100);
    let tentativas = 0;
    let numero;

    do {
        numero = parseInt(prompt('Olá ' + nome + '! Preparando o jogo...\n' +
                                 'Um número de 1 a 100 foi sorteado!\n' +
                                 'Tente adivinhar qual é. Boa sorte!\n'));
        tentativas++;

        if (numero < numeroSorteado) {
            alert('O número sorteado é maior, tente novamente');
        } else if (numero > numeroSorteado) {
            alert('O número sorteado é menor, tente novamente');
        } else if (numero === numeroSorteado) {
            if (tentativas <= 3) {
               alert(`Uau! Você acertou em ${tentativas} tentativas, é um gênio da adivinhação! 🧠`);
            } else if (tentativas <= 6) {
               alert(`Muito bem! Você acertou em ${tentativas} tentativas, foi rápido! 🚀`);
            } else {
               alert(`Conseguiu! você acertou em ${tentativas} tentativas, persistência é tudo! 💪`);
            }   
                  if (tentativas < recorde) {
                     recorde = tentativas;
                     melhorJogador = nome;
                     alert(`🎉 Novo recorde! Você é o(a) melhor jogador(a) com apenas ${tentativas} tentativas!`);
                  } else if (tentativas === recorde && nome !== melhorJogador) {
                     alert(`Empate com o recorde atual de ${tentativas} tentativas! 👏`);
                  }
            } else {
            alert('Jogo encerrado, o número sorteado era: ' + numeroSorteado);
            break;
              
            let ranking = prompt('Deseja ver o ranking? (sim / não)').toLowerCase();
                if (ranking === 'sim') {
                alert(`🏅 Melhor jogador(a): ${melhorJogador}\n🔢 Recorde: ${recorde} tentativa(s)`);
                } 
        }
    } while (numero !== numeroSorteado);

    let resposta = prompt('Deseja jogar novamente? (sim / não)').toLowerCase();
    if (resposta !== 'sim') {
        alert('Obrigado por jogar!');
        break;
    }
}
