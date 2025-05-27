//CONDICIONALES

let a = 5;
let b = 10;

//Escriba un programa en JS el cual tenga que calcular
//si a es mayor que b, o si b es mayor que a, o si a y b son iguales.

// = -> asignación, == -> comparación débil, === -> comparación fuerte (usar preferentemente)

// 5 == `5´ -> true
// 0 == false -> true
// null == undefined

// 5 === `5´ -> false
// 0 === false -> false
// 5 === 5 -> true


// >, <, >=, <=, ==, ===, !=, !==, &&, ||

if(a > b){
    console.log("a es mayor que b");
}else if(a ==b){
    console.log("a es lo mismo que b");
}else{
    console.log("a no es lo mismo que b, y a es menos que b");   
}


//SWITCH

let dia = "Lunes";

switch(dia){
    case "Lunes":
        console.log("Voy a estudiar JS");
        break;
    case "Martes":
        console.log("Voy a estudiar Java");
        break;
    case "Miércoles":
        console.log("Voy a estudiar SQL");
        break;
    default:
        console.log("Voy a descansar");
}

