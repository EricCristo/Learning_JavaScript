// os 3 tipos de variaveis: const; var; let; ... 

//estudando a base do var 

//var altura = 10;
//var comprimento = 5;

//area = altura * comprimento;
//console.log(area)
//var area;

//let forma = 'retangulo'
//let altura = 10;
//let comprimento = 5;
//let area;

//if (forma === 'retangulo'){
//    area = altura * comprimento;
//}else{
 //   area = (altura * comprimento) / 2;
//}

//console.log(area)
//let area; ( se a let for declarada depois o programa nao le)

const forma = 'triangulo'
const altura = 10;
const comprimento = 5;
//const area; // constante tem que ter um valor inicial e nao variar
let area;

if (forma === 'quadrado'){
    area = altura * comprimento;
}else{
    area = (altura * comprimento) / 2;
}

console.log(area)