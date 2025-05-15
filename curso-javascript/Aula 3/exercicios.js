// Exercício 1

let anoNascimento = parseInt(prompt('Digite o ano de nascimento: '));
let anoAtual = parseInt(prompt('Digite o ano atual: '));

let idade = anoAtual - anoNascimento;

if (idade >= 18) {
    alert('Você completa ' + idade + ' anos em 2025 e poderá tirar a habilitação. '); 
}
else {
    alert('Você completa ' + idade + ' anos em 2025 e não poderá tirar a habiliatação. ');
}

// Exercício 2

let idade = parseInt(prompt('Qual a sua idade? '));

if (idade >= 65) {
    alert('Você é um idoso.');
}
else if (idade >= 18) {
    alert('Você é um adulto.');
}
else if (idade >= 13) {
    alert('Você é um adolescente.');
}
else {
    alert('Você é uma criança.');
}

// Exercício 3

let peso = Number(prompt('Digite seu peso (em kg): '));
let altura = Number(prompt('Digite sua altura (em metros): '));

alert('Peso: ' + peso + 'kg' + '\nAltura: ' + altura + 'm' );

let IMC = peso / (altura * altura);

if (IMC < 18.5) {
    alert('Seu IMC é: ' + IMC.toFixed(2) + '\nVocê está abaixo do peso.');
}
else if (IMC > 18.5 && IMC <= 24.9) {
    alert('Seu IMC é: ' + IMC.toFixed(2) + '\nSeu peso está normal.');
}
else if (IMC > 25 && IMC <= 29.9) {
    alert('Seu IMC é: ' + IMC.toFixed(2) + '\nVocê está com sobrepeso.');
}
else if (IMC > 30 && IMC <= 34.9) {
    alert('Seu IMC é: ' + IMC.toFixed(2) + '\nVocê está com obesidade grau 1.');
}
else if (IMC > 35 && IMC <= 39.9) {
    alert('Seu IMC é: ' + IMC.toFixed(2) + '\nVocê está com obesidade grau 2.');
}
else if (IMC > 40) {
    alert('Seu IMC é: ' + IMC.toFixed(2) + '\nVocê está com obesidade grau 3.');
}

// Exercício 4

let num1 = parseInt(prompt('Digite o primeiro número:'));
let num2 = parseInt(prompt('Digite o segundo número:'));

let operacao = prompt('--- Operações ---' + 
                      '\n1 - soma' +
                      '\n2 - subtração' +
                      '\n3 - multiplicação' +
                      '\n4 - divisão' +
                      '\n-----------------' +
                      '\nEscolha uma operação:');

let soma = num1 + num2;
let subtracao = num1 - num2;
let multiplicacao = num1 * num2;
let divisao = num1 / num2;

switch (parseInt(operacao)) {
    case 1:
        alert('Resultado da soma: ' + soma);
        break;
    case 2:
        alert('Resultado da subtração ' + subtracao);
        break;
    case 3:
        alert('Resultado da multiplicação: ' + multiplicacao);
        break;
    case 4:
        if (num2 === 0) {
            alert('Erro de divisão.');
        } else {
        alert('Resultado da divisão: ' + divisao);
        }
        break;
    default:
        alert('Operação inválida.');
        break;
}

// Exercício 5

let valorInicial = parseInt(prompt('Digite o valor inicial:'));
let valorFinal = parseInt(prompt('Digite o valor final:'));

let contador = valorInicial

while (contador <= valorFinal) {
    console.log(contador);
    contador++;
}

// Exercício 6

let N = parseInt(prompt("Digite um número inteiro:"));

let soma = 0;

for (let i = 1; i <= N; i++) {
  if (i % 2 === 0) {
    soma += i;
  }
}

console.log('A soma dos números pares de 1 até ' + N + ' é: ' + soma);

// Exercício 7 

const numeros = [3, -2, 5, -1, 0];

let positivos = 0;
let negativos = 0;

for (let numero of numeros) {
    if (numero === 0) {
        break;
    } else if (numero > 0) {
        positivos++;
    } else {
        negativos++;
    }
}

console.log('Quantidade de números positivos: ' + positivos);
console.log('Quantidade de números negativos: ' + negativos);