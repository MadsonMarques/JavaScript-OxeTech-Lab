let estoque = Number(prompt('Quantidade atual de estoque: '));
let remover = Number(prompt('Quantidade que deseja remover: '));

let novoEstoque = estoque - remover;

console.log(novoEstoque >= 0
? 'Estoque atualizado: ' + novoEstoque
: 'Operação inválida: quantidade insuficiente no estoque');