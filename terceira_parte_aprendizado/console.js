// learning about console

const minhaVar = true;

console.log(245) //log -> to register
console.log("im an text")
console.log(minhaVar)

//console.error -> to show an error to another people ---> error handling

console.error('some error!')

// exemples at error

console.log("error!"); //error
console.error("error!"); //error

// lets try a little bit diferrent. we just need get some especific information

console.log("error"); //error
console.error(new Error("error")); //Error: error
//at Object.<anonymous> (C:\Users\ericc\OneDrive\Ambiente de Trabalho\JS learning\project 1\Learning_JavaScript\terceira_parte_aprendizado\console.js:21:15)
//at Module._compile (node:internal/modules/cjs/loader:1254:14)
//at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
//at Module.load (node:internal/modules/cjs/loader:1117:32)
//at Module._load (node:internal/modules/cjs/loader:958:12)
//at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
//at node:internal/main/run_main_module:23:47
