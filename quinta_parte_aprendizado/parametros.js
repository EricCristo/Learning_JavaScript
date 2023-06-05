//parametros de funcao

//function soma(number1, number2) {
//    return number1 + number2;//
//}

//console.log(soma(2, 2))
//console.log(soma(12, 452))
//console.log(soma(2, 285))

// parametro x argumento 

//ordem dos parametros

 function nameAge(name, age) {
 return `my name is ${name} and im ${age}`; 
 }

 console.log(nameAge("eric", 20))

function soma(number1, number2) {
    return number1 + number2;//
}

function multiplica(number1, number2) {
    return number1 * number2;
}

console.log(multiplica(soma(4, 5), soma(3, 3)))

function comParametro(param) {
    console.log(param)
}
comParametro()