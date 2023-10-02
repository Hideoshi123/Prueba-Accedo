/*Este código tiene la función de deshabilitar las casillas en la fila y columna de la casilla seleccionada, ya sea haciendo clic manualmente o de forma automática a través de un botón. Además, proporciona un botón para reiniciar la matriz o tabla a su estado original.*/ 


// Selecciona la etiqueta de HTML con la id "reiniciar" y la almacena en una variable llamada "botonReiniciar"
let botonReiniciar = document.getElementById('reiniciar');
// Selecciona la etiqueta de HTML con la id "alAzar" y la almacena en una variable llamada "botonAlAzar"
let botonAlAzar = document.getElementById('alAzar');
// Selecciona todas las etiquetas "input" de tipo "checkbox" en la página y las almacena en la variable  llamada "casillas" creando una lista
let casillas = document.querySelectorAll('input[type="checkbox"]');

// Define una función llamada "habilitarTodos" que habilita y desmarca todas las "casillas" es decir los "inputs"

function habilitarTodos() {
  casillas.forEach(function(casilla) { // Ciclo que recorre la lista "casillas" y toma cada elemento con el alias "casilla"
    casilla.disabled = false; // Modifica el atributo de la etiqueta para que se pueda interactuar con ella 
    casilla.checked = false; // Modifica el atributo de la etiqueta para que quede desmarcada
  });
}

// Define una función llamada "habilitarYMarcarAzar" que marca aleatoriamente 5 casillas y deshabilita las demás

function deshabilitarYMarcarAzar() {
  casillas.forEach(function(casilla) { // Ciclo que recorre la lista "casillas" y toma cada elemento con el alias "casilla"
    casilla.disabled = false; // Modifica el atributo de la etiqueta para que se pueda interactuar con ella 
    casilla.checked = false; // Modifica el atributo de la etiqueta para que quede desmarcada
  });

// Inicializa un contador para llevar el registro de las casillas marcadas

  let marcadas = 0;

// Ciclo que se recorrera mientras no se hayan marcado 5 casillas

  while (marcadas < 5) {

// Genera un numero aleatorio dentro del rango de casillas disponibles

    let indiceAleatorio = Math.floor(Math.random() * casillas.length);

// Selecciona la casilla que se encuentre en la posicion previamente obtenida y la almacena en una variable  llamada "casillaAleatoria"

    let casillaAleatoria = casillas[indiceAleatorio];

// Verifica que la "casillaAleatoria" no esté deshabilitada ni marcada

    if (!casillaAleatoria.disabled && !casillaAleatoria.checked) {
    
// Marca la casilla aleatoria y aumenta el contador

      casillaAleatoria.checked = true;
      marcadas++;

// Obtiene las clases de la casilla aleatoria

      let clasesInput = casillaAleatoria.classList;

// Divide las clases en un arreglo (como son varias clases, al obtenerlas estas se juntas formando un string, pero gracias a que las separa un espacio vacio " ", entonces se pueden separar los caracteres que esten juntos y volverlos strings individuales)

      let clases = clasesInput.value.split(' ');


// Para cada clase de la casilla aleatoria se obtendran los inputs que contengan estas mismas clases

      clases.forEach(function(clase) { //Ciclo que recorre la lista "clases" y toma cada elemento con el alias "clase"

// Selecciona todas las etiquetas con la misma clase y los almacena en una variable llamada "otrasCasillas" convirtiendola en una lista

        let otrasCasillas = document.querySelectorAll('.' + clase);

        otrasCasillas.forEach(function(otraCasilla) { //Ciclo que recorre la lista "otrasCasillas" y toma cada elemento con el alias "otraCasilla"

// Comprueba que no se toma encuenta la casilla aleatoria, si no es entonces la deshabilita
          if (otraCasilla !== casillaAleatoria) { 
            otraCasilla.disabled = true; // Modifica el atributo de la etiqueta para que no se pueda interactuar con ella
          }
        });
      });
    }
  }
}


casillas.forEach(function(casilla) { // Ciclo que agrega un evento de clic a cada casilla
  casilla.addEventListener('click', function(event) {

// Si la casilla se marca sucede lo siguiente:

    if (this.checked) {

// Obtiene las clases de la casilla

      let clasesInput = this.classList;

// Divide las clases en un arreglo (como son varias clases, al obtenerlas estas se juntas formando un string, pero gracias a que las separa un espacio vacio " ", entonces se pueden separar los caracteres que esten juntos y volverlos strings individuales)

      let clases = clasesInput.value.split(' ');

// Para cada clase de la casilla se obtendran los inputs que contengan estas mismas clases

      clases.forEach(function(clase) { //Ciclo que recorre la lista "clases" y toma cada elemento con el alias "clase"

// Selecciona todas las etiquetas con la misma clase y los almacena en una variable llamada "otrasCasillas" convirtiendola en una lista

        let otrasCasillas = document.querySelectorAll('.' + clase);
        otrasCasillas.forEach(function(otraCasilla) { //Ciclo que recorre la lista "otrasCasillas" y toma cada elemento con el alias "otraCasilla"

// Comprueba que no se toma encuenta la "casilla", si no es entonces la deshabilita

          if (otraCasilla !== casilla) {
            otraCasilla.disabled = true; // Modifica el atributo de la etiqueta para que no se pueda interactuar con ella
          }
        });
      });
    }
  });
});

// Agrega un evento de clic al botón "Reiniciar" para llamar a la función habilitarTodos

botonReiniciar.addEventListener('click', habilitarTodos);

// Agrega un evento de clic al botón "Al Azar" para llamar a la función deshabilitarYMarcarAzar

botonAlAzar.addEventListener('click', deshabilitarYMarcarAzar);