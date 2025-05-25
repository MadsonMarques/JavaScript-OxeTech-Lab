// Exercício 1

function gerenciarTarefas(tarefas, acao, novaTarefa) {
    switch (acao) {
        case 'adicionarInicio':
            if (novaTarefa) tarefas.unshift(novaTarefa);
            break;
        case 'adicionarFim':
            if (novaTarefa) tarefas.push(novaTarefa);
            break;
        case 'removerInicio':
            tarefas.shift();
            break;
        case 'removerFim':
            tarefas.pop();
            break;
        default:
            console.log('Ação inválida.');
    }
}

const tarefas = ['Estudar', 'Treinar', 'Ler'];

gerenciarTarefas(tarefas, 'adicionarFim', 'Dormir');

console.log(tarefas);

// Exercício 2

function calcularMedia(notas) {
    notas.sort(function(a, b) {
        return b - a;
    });
   
    let melhoresNotas = notas.slice(0, 3);

    let soma = melhoresNotas.reduce(function(total, nota) {
        return total + nota;
    }, 0);
    
    let media = soma / melhoresNotas.length;

    return media;
}

let notas = [5, 8, 9, 3, 10, 7];
let mediaTresMelhores = calcularMedia(notas);

console.log(mediaTresMelhores); 

// Exercício 3

function somarNumeros(numeros) {
    let soma = 0;

    for (let indice in numeros) {
        let numero = numeros[indice];

        if (numero % 2 === 0 && numero % 3 === 0) {
            soma += numero;
        }
    }

    return soma;
}

const numeros = [4, 10, -4, 6, 24, 50, 12, 0, -1];
let soma = somarNumeros(numeros);

console.log(soma);

// Exercício 4

function obterMaior(numeros) {
    let maior = numeros[0];

    for (let numero of numeros) {
        if (numero > maior) {
            maior = numero;
        }
    }

    return maior;
}

function obterMenor(numeros) {
    let menor = numeros[0]; 

    for (let numero of numeros) {
        if (numero < menor) {
            menor = numero;
        }
    }

    return menor;
}

const numeros = [-1, 3, 8, -2, 4, 10];

let maior = obterMaior(numeros);
let menor = obterMenor(numeros);

console.log(maior, menor);

// Exercício 5

function exibirNomes(nomes) {
    nomes.forEach(function(nome) {
        console.log('Bem-vindo, ' + nome + '!');
    });
}

const nomes = ['Lucas', 'Marina', 'João'];

exibirNomes(nomes);

// Exercício 6

function converterMoeda(precosDolares) {
    return precosDolares.map(function(preco) {
        return preco * 5;
    });
}

const precosDolares = [10, 20, 30];
const precoReais = converterMoeda(precosDolares);

console.log(precoReais);

// Exercício 7

function filtrarDevedores(dividas) {
    return dividas.filter(function(valor) {
        return valor > 80;
    });
}

const dividas = [95.90, 180.50, 22.99, 105.99, 30.50];
const devedores = filtrarDevedores(dividas);

console.log(devedores); 

// Exercício 8

function calcularTotalVendas(vendas) {
    let total = 0;

    for (let valor of vendas) {
        total += valor;
    }

    return total;
}

const vendas = [150, 200, 100, 50];
let totalVendas = calcularTotalVendas(vendas);

console.log(totalVendas);