function calcularDiaSemana1(){
    let num = prompt("Ingresa un número");
    let respuesta;
    if(num == 1){
        respuesta = "Lunes";
    }else if (num == 2){
        respuesta = "Martes";
    }else if (num == 3){
        respuesta = "Miércoles";
    }else if (num == 4){
        respuesta = "Jueves";
    }else if (num == 5){
        respuesta = "Viernes";
    }else if (num == 6){
        respuesta = "Sábado";
    }else if (num == 7){
        respuesta = "Domingo";
    }else{
        respuesta = "Error";
    }

    document.getElementById("parrafo1").innerHTML = respuesta;

}

function calcularDiaSemana2(){
    let num = parseInt(prompt("Ingresa un número"));
    let respuesta;
    switch(num){
        case 1:
            respuesta = "Lunes";
            break;
        case 2:
            respuesta = "Martes";
            break;
        case 3:
            respuesta = "Miércoles";
            break;
        case 4:
            respuesta = "Jueves"; 
            break;
        case 5:
            respuesta = "Viernes";
            break;
        case 6:
            respuesta = "Sábado";
            break;
        case 7:
            respuesta = "Domingo";
            break;  
        default:
            respuesta = "Error";     
    }

    document.getElementById("parrafo2").innerHTML = respuesta;
}

function calcularDiaSemana3(){
    let num = document.getElementById("numero_ejercicio3").value;
    let respuesta;
    if(num == 1){
        respuesta = "Lunes";
    }else if (num == 2){
        respuesta = "Martes";
    }else if (num == 3){
        respuesta = "Miércoles";
    }else if (num == 4){
        respuesta = "Jueves";
    }else if (num == 5){
        respuesta = "Viernes";
    }else if (num == 6){
        respuesta = "Sábado";
    }else if (num == 7){
        respuesta = "Domingo";
    }else{
        respuesta = "Error";
    }

    document.getElementById("parrafo3").innerHTML = respuesta;

}

function calcularDiaSemana4(){
    let num = parseInt(document.getElementById("numero_ejercicio4").value);
    let respuesta;
    switch(num){
        case 1:
            respuesta = "Lunes";
            break;
        case 2:
            respuesta = "Martes";
            break;
        case 3:
            respuesta = "Miércoles";
            break;
        case 4:
            respuesta = "Jueves"; 
            break;
        case 5:
            respuesta = "Viernes";
            break;
        case 6:
            respuesta = "Sábado";
            break;
        case 7:
            respuesta = "Domingo";
            break;  
        default:
            respuesta = "Error";     
    }

    document.getElementById("parrafo4").innerHTML = respuesta;
}
