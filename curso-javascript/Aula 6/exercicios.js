// Exercício 1

function criarUsuario(nome, idade, email) {
    this.nome = nome;
    this.idade = idade;
    this.email = email;
}

const nomeUsuario = new criarUsuario('Madson', 22, 'madsonrafa9@gmail.com');
console.log(nomeUsuario);

// Exercício 2

function atualizarIdade(nome, idade) {
    this.nome = nome;
    this.idade = idade;
};

let usuario = {
    nome: 'Madson',
    idade: 22,
};

const novaIdade = new atualizarIdade();
usuario.idade = 23;

console.log(usuario);

// Exercício 3

function explorarObjeto(pessoa, operacao) {
    if (operacao === 'chaves') {
        return Object.keys(pessoa);
    } else if (operacao === 'valores') {
        return Object.values(pessoa);
    } if (operacao === 'entradas') {
        return Object.entries(pessoa);
    } else 
        return 'Operação inválida.';
};

const pessoa = {
    nome: 'Ana',
    idade: 28,
    cidade: 'Recife'
};

console.log(explorarObjeto(pessoa, 'chaves'));
console.log(explorarObjeto(pessoa, 'valores'));
console.log(explorarObjeto(pessoa, 'entradas'));
console.log(explorarObjeto(pessoa, 'teste'));

// Exercício 4

function exibirCatalogo(produtos) {
    console.log('Catálogo de Produtos:');

    for (let indice in produtos) {
        let produto = produtos[indice];
        console.log(produto.nome + ' R$ ' + produto.preco);
    }
}

const produtos = [
    { nome: 'Teclado', preco: 100 },
    { nome: 'Monitor', preco: 800 },
    { nome: 'Webcam', preco: 250 }
];

exibirCatalogo(produtos);

// Exercício 5

function protegerObjeto(objeto, modo) {
    switch (modo) {
        case 'extensivel':
            Object.preventExtensions(objeto);
            break;
        case 'selado':
            Object.seal(objeto);
            break;
        case 'congelado':
            Object.freeze(objeto);
            break;
        default:
            console.log('Modo de proteção inválido.');
    }

    return {
        extensivel: Object.isExtensible(objeto),
        selado: Object.isSealed(objeto),
        congelado: Object.isFrozen(objeto)
    };
}

const produto = { nome: 'Câmera', preco: 1200 };
const resultado = protegerObjeto(produto, 'congelado');

console.log(resultado); 

// Exercício 6

function listarDisponiveis(produtos) {
    return produtos.filter(filtrarDisponiveis);
}

function filtrarDisponiveis(produto) {
    return produto.estoque > 0;
}

function buscarProduto(produtos, nomeProduto) {
    return produtos.find(encontrarProdutoPorNome(nomeProduto)) || 'Produto não encontrado.';
}

function encontrarProdutoPorNome(nomeProduto) {
    return function(produto) {
        return produto.nome === nomeProduto;
    };
}

function calcularValorTotal(produtos) {
    return produtos.reduce(somarValorTotal, 0);
}

function somarValorTotal(total, produto) {
    return total + (produto.preco * produto.estoque);
}

function atualizarEstoque(produtos, nomeProduto, novaQuantidade) {
    let produto = produtos.find(encontrarProdutoPorNome(nomeProduto));
    if (produto) {
        produto.estoque = novaQuantidade;
    } else {
        console.log('Produto não encontrado.');
    }
}

const produtos = [
    { nome: 'Celular', preco: 2000, estoque: 5 },
    { nome: 'Notebook', preco: 3500, estoque: 0 },
    { nome: 'Fone de Ouvido', preco: 250, estoque: 12 }
];

console.log(listarDisponiveis(produtos)); 
console.log(buscarProduto(produtos, 'Notebook')); 
console.log(calcularValorTotal(produtos)); 

atualizarEstoque(produtos, 'Notebook', 3);
console.log(produtos[1].estoque); 