// Exercício 1

function verificarIdade(nome = 'visitante', idade) {
  if (idade < 0 || idade > 120) {
    alert('Idade inválida');
    return;
  }

  if (idade >= 18) {
    alert('Olá, ' + nome + '!' + ' Você é maior de idade.');
  } else {
    alert('Olá, ' + nome + '!' + ' Você é menor de idade.');
  }
}

while (confirm('Deseja verificar sua idade?')) {
  let nome = prompt('Digite seu nome:');
  if (!nome) {
    nome = "visitante";
  }

  let idade = parseInt(prompt('Digite sua idade:'));

  verificarIdade(nome, idade);
}

// Exercício 2

function calcular(n1 = 0, n2 = 1, operador = '+') {
    switch (operador) {
        case '+':
            return n1 + n2;
        case '-':
            return n1 - n2;
        case '*':
            return n1 * n2;
        case '/':
            return n2 !== 0 ? n1 / n2 : 'Erro de divisão por zero';
        case '%':
            return n2 !== 0 ? num1 % n2 : 'Erro de módulo por zero';
        default:
            return 'Operador inválido';
    }
}

function iniciarCalculadora() {
    while (true) {
        let n1 = parseFloat(prompt('Digite o primeiro número:'));
        let n2 = parseFloat(prompt('Digite o segundo número:'));
        let operador = prompt('Escolha o operador (+, -, *, /, %):');

        if (isNaN(n1) || isNaN(n2)) {
            alert('Entrada inválida.');
            continue;
        }

        let resultado = calcular(n1, n2, operador);
        alert('Resultado: ' + resultado);

        let continuar = prompt('Deseja fazer outro cálculo?');
        if (continuar !== 'sim') {
            alert('Programa encerrado');
            break;
        }
    }
}

iniciarCalculadora();

// Exercício 3

const mensagemDeBoasVindas = function(nome) {
    const horaAtual = new Date().getHours();
    
    let saudacao;

    if (horaAtual >= 6 && horaAtual <= 11) {
        saudacao = 'Bom dia ';
    } else if (horaAtual >= 12 && horaAtual <= 17) {
        saudacao = 'Boa tarde ';
    } else if (horaAtual >= 18 && horaAtual <= 23) {
        saudacao = 'Boa noite ';
    } else {
        saudacao = 'Olá ';
    }

    return saudacao + nome;
};

const nomeUsuario = prompt('Digite seu nome:');
alert(mensagemDeBoasVindas(nomeUsuario) + '!');

// Exercício 4

const calcularDesconto = (preco, porcentagemDesconto) => {
    if (isNaN(preco) || isNaN(porcentagemDesconto) || preco <= 0 || porcentagemDesconto < 0 || porcentagemDesconto > 100) {
        return 'Valores inválidos!';
    }

    const valorFinal = preco - (preco * (porcentagemDesconto / 100));
    return 'O valor final do produto após o desconto de ' + porcentagemDesconto  + ' é: R$ ' + valorFinal.toFixed(2);
};

while (true) {
    let preco = parseFloat(prompt('Informe o valor do produto:'));
    let porcentagemDesconto = parseFloat(prompt('Informe a porcentagem de desconto:'));

    alert(calcularDesconto(preco, porcentagemDesconto));

    let continuar = prompt('Deseja calcular o desconto de outro produto? (sim/não)');
    if (continuar !== 'sim') {
        alert('Processo encerrado');
        break;
    }
}

iniciarProcesso();

// Exercício 5

function executarComAtraso(mensagem, callback) {
    setTimeout(exibirMensagem, 2000, mensagem, callback);
}

function exibirMensagem(mensagem, callback) {
    console.log(mensagem); 
    callback(); 
}

function saudacaoFinal() {
    console.log('Obrigado por aguardar!');
}

executarComAtraso('Carregando informações...', saudacaoFinal);