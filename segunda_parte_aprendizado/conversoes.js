// tipo  
// booleanos

// conversao implicita
const numero = 456;
const numeroString = '456'; // alternativa  é por ja na Variavel

//Number() --- transformar em numero
//String()
//console.log( numero === numeroString) // false
// p o js um numero é diferente de um texto, ou seja === comparando se o valor e o tipo são iguais
console.log( numero == numeroString) //true, já que esta comparando os valores impostos 

console.log( numero + numeroString) // ele esta concatenando e nao somando numericamente
// para somar temos que reforcar que as variaveis seja numeros ou seja:
console.log(numero + Number(numeroString))

// conversao explicita