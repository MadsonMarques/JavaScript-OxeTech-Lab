let nome = prompt("Informe seu nome:");
let peso = prompt("Informe seu peso (em kg):");
let altura = prompt("Informe sua altura (em metros):");

let imc = peso / (altura * altura);

let confirmacao = confirm("Seus Dados:\nNome: " + nome + "\nPeso: " + peso + "\nAltura: " + altura + "\nIMC: " + imc + "\n\nOs Deseja continuar?");

confirmacao && alert(nome + ", seu IMC é " + imc);
confirmacao || alert("Você saiu do programa.");