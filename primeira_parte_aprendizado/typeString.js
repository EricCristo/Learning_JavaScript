const texto1 = "hello, amazing world!!";
const texto2 = 'HELLOOO, WORLD';
const stringDeNumeros = "184651";

const exemploCitacao = 'como disseram "abre em aspas simples e fecha em duplas"'
const exemplo2citacao = "mas 'o contrario tambem é valido'"

console.log(exemploCitacao + " " + exemplo2citacao)

// concatenar (+) somar textos etc´  exemplo acima

// diferentes tipos de caracteres Unicode
const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)
// fim do teste

//verificação de similaridade de Strings
const input = "ovar";
const cidade = "Ovar";
const tentandoTrue = "Ovar";

console.log(cidade === input); // false
console.log(cidade === tentandoTrue); // true

// É possivel comparar elas se transformar toda em letra minuscula

const cidadeMinusculo = cidade.toLowerCase();

console.log(input === cidadeMinusculo); //true ... transformando as letras em mesmo padrao pode se analisar a palavra e nao a diferenciacao de MAISCULA ou minuscula
