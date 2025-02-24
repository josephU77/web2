let numero1 = prompt("dame el primer numero:");
let numero2 = prompt("dame el segundo numero:");
let numero3 = prompt("dame el tercer numero:");

if(numero1 > numero2 && numero1 > numero3){
    console.log("El primer numero: " + numero1 + " es el mayor");

}  else if(numero2 > numero3 && numero2 > numero1){
    console.log("El segundo numero: " + numero2 + " es el mayor");

}else if(numero1 == numero2 && numero1 !== numero3){
    console.log("los dos primeros numeros: " + numero1 +" y " + numero2 +" son iguales pero el tercero no");

}else if(numero2 == numero3 && numero1 !== numero2){
    console.log("los dos ultimos numeros: " + numero2 +" y " + numero3 +" son iguales pero el primero no");

}else if(numero1 == numero3 && numero1 !== numero2){
    console.log("el primer y ultimos numero: " + numero1 +" y " + numero3 +" son iguales pero el segundo no");

}else if(numero1 == numero2 && numero1 == numero3){
    console.log("los tres numero son iguales: " + numero1 + numero2 + numero3);

} else{
    console.log("el tercer numero es mayor: " + numero3);
}