let n1 = parseInt(prompt("agregue el primer numero"));
let n2 = parseInt(prompt("agregue el segundo numero"));

function suma(n1, n2){
    return parseInt(n1) + parseInt(n2);
}

function resta(n1, n2){
    return parseInt(n1) - parseInt(n2);
}

function division(n1, n2){
    return parseInt(n1) / parseInt(n2);
}

function modulo(n1, n2){
    return parseInt(n1) % parseInt(n2);
}

let opcion = parseInt(prompt(`seleccione una opcion:
    1. suma
    2. resta
    3. division
    4. modulo`))
switch(opcion){
    case 1:
        console.log(suma(n1,n2));
    break;
    case 2:
        console.log(resta(n1,n2));
    break;
    case 3:
        console.log(division(n1,n2));
    break;
    case 4:
        console.log(modulo(n1,n2));
    break;
    default:
        console.log("error")
}