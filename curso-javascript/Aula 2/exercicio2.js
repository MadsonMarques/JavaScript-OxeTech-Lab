let valorCompra = prompt("Informe o valor da compra:");

let taxaDesconto = valorCompra > 100 ? 0.10 : 0.05;
let desconto = valorCompra * taxaDesconto;
let valorFinal = valorCompra - desconto;

console.log("Valor original: R$ " + valorCompra);
console.log("Desconto aplicado: R$ " + desconto);
console.log("Valor final: R$ " + valorFinal);