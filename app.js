let numeroMaquina = Math.floor(Math.random() * 10) + 1;
let vidas = 5;

console.log(numeroMaquina);

let numeroUsuario = parseInt(prompt("Adivina el número (1-10)"));

while (numeroMaquina !== numeroUsuario && vidas > 1) {
    vidas--;
    numeroUsuario = parseInt(prompt("Número incorrecto, intenta de nuevo. Vidas restantes: " + vidas));
}

if (numeroMaquina === numeroUsuario) {
    alert("¡Felicidades! Adivinaste el número.");
} else {
    alert("¡Perdiste! El número era " + numeroMaquina);
}
