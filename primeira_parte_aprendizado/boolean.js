//metodos Boolean True/False

const primeiroNumero = 5;
const segundoNumero = 10;
const terceiroNumero = 10/2;
let cadastroAtivado = true;


console.log(primeiroNumero === segundoNumero);// false, ja que nao sao iguais
console.log(primeiroNumero === terceiroNumero); // ja que são iguais

const texto1 = "Aprender";
const texto2 = "aprender"; //mesmo exemplo da aba typeString.js

console.log(texto1 === texto2);

//testando operacoes

const soma = 10 + 10;
const multiplicacao = 10 * 10;
const operacao = (soma + multiplicacao) + 5;

console.log(operacao);