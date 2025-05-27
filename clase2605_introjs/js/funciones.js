//FUNCIONES// -> Bloque de código que solo se ejecuta cuando se le llama
//var y let (usar let)


//Funciones sin parámetros
function saludo(){
    console.log("Hola mundo");
}

//saludo();


//Funciones con parámetros
function operacion(num1, num2){
    let resultado = num1 + num2;
    console.log("Resultado: ", resultado);
}
operacion(10,10);
operacion(20,50);


//Funciones con return y sin parámetros

function retorno1(){
    let numero = 5;
    return numero;
}

console.log(retorno1());

//Funciones con return y con parámetros

function retorno2(numero){
    return numero;
}

console.log(retorno2(20));



//pruebas diferencias entre vat y log
function testScope(){
    if(true){
        var x =10;
        let y = 20;
    }

    console.log(x); // x=10
    console.log(y); // y= ReferenceError
}
