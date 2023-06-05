function introduce(name) {
    return `my name is ${name}`;
}

//arrow function
const introduceArrow = name => `my name is ${name}`;
const soma = (num1, num2) => num1 + num2;

//arrow function with more than 1 line to instruction

const somaNumeros = (num1, num2) => {
    if (num1 || num2 > 10){
        return "only number to 1 at 9"
    } else {
        return num1 + num2;
    }
}

// hoisting: arrow function have the same behavior