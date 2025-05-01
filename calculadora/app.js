function agregarPantalla(valor) {
    const pantalla = document.getElementById('pantalla');
    pantalla.value += valor;
  }
  
  function limpiarPantalla() {
    document.getElementById('pantalla').value = '';
  }
  
  function calcular() {
    const pantalla = document.getElementById('pantalla');
    try {
      pantalla.value = eval(pantalla.value);
    } catch {
      pantalla.value = 'Error';
    }
  }