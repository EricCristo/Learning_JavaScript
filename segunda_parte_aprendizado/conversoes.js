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

console.log( numero + numeroString) //conversao implicita // ele esta concatenando e nao somando numericamente
// para somar temos que reforcar que as variaveis seja numeros ou seja:
console.log(numero + Number(numeroString))

// conversao explicita

let telefone = 12341234;
console.log("O telefone é " + String(telefone)); // teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as strings

let telefone1 = 12341234;
console.log("O telefone é " + telefone.toString()); // o .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.

let usuarioConectado = false;
console.log(String(usuarioConectado)); // teremos a conversão da booleana para string, nesse caso teremos uma string “false”.
usuarioConectado = true;
console.log(String(usuarioConectado)); // agora teremos uma string “true”.