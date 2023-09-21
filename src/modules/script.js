const tds = document.getElementsByClassName('casillero');
const tdColumnas = document.getElementsByClassName('cantidadColumna');
const tdFilas = document.getElementsByClassName('cantidadFila');
const cantRojo = document.getElementsByClassName('cantRojo')[0];
const cantAzul = document.getElementsByClassName('cantAzul')[0];
console.log(tds.innerText);


//Cantidad total por numero: 1color: 
function cantidadPorColor(tablero){
    let cantidadRoja = 0;
    let cantidadAzul = 0; 
    for (let i = 0; i < tablero.length; i++) {
        if(tablero[i].color === 'red'){
            cantidadRoja ++
        } else if(tablero[i].color === 'blue'){
            cantidadAzul ++
        }
    }
    cantRojo.textContent = cantidadRoja;
    cantAzul.textContent = cantidadAzul;
}

//Esta función lee cada vez que se realiza un cambio en el tablero para poder modificarlo
function generarTablero (){
    let tablero = [];
    for (let i = 0; i < tds.length; i++) {
        tablero.push({numero: parseInt(tds[i].innerText), color: tds[i].style.backgroundColor})
    }
    return tablero
}

//Esta función pretende mostrar la cantidad de rojos en una determinada columna:
function contadorColumna (tablero){
    //Dado que no se cual es la cantidad exacta de filas y columnas que tiene mi tablero, sabiendo que siempre es un  cuadrado, puedo sacar su cantidad de columnas y filas aplicando la raíz cuadrada a la cantidad de celdas:
    const columnas = Math.sqrt(tablero.length)
    const subArregloColumnas = []
    for(let j = 0; j< columnas; j++){
        subArregloColumnas[j] = tablero.filter((el)=> el.numero == j + 1 || (el.numero - (j+1)) % 8 == 0 );
    } 
    let resultados = [];
     for(let i = 0; i < subArregloColumnas.length; i++){
        resultados[i]= 0;
        for(j = 0; j < subArregloColumnas[i].length; j++){
            if(subArregloColumnas[i][j].color === 'red'){
                resultados[i] ++;
            }
        }
     }
     return resultados;
}

//Esta función pretende mostrar la cantidad de rojos en una determinada fila:
function contadorFila (tablero){
    const filas = Math.sqrt(tablero.length);
    const subArregloFilas = [];

    for (let i = 0; i < tablero.length; i += filas) {
        let subarreglo = tablero.slice(i, i + filas)
        subArregloFilas.push(subarreglo)
    }
    let resultados = [];
     for(let i = 0; i < subArregloFilas.length; i++){
        resultados[i]= 0;
        for(j = 0; j < subArregloFilas[i].length; j++){
            if(subArregloFilas[i][j].color === 'red'){
                resultados[i] ++;
            }
        }
     }
     return resultados;
}
    

//-------------------------Listener de eventos-----------------------------------
//Esta función se ejecuta cada vez que hacemos click en alguna casilla.
//Cambia el color de la casilla, a la vez que hace un escaneo del tablero para poder colocar el valor correcto a los contadores de casillas rojas por columna y fila. Por último también coloca el valor correcto a los contadores totales de casillas rojas y azules.
for (let i = 0; i < tds.length; i++) {
    tds[i].addEventListener("click", function() {
      // Tu código a ejecutar cuando se haga clic en un <td>
      if(tds[i].style.backgroundColor === 'red'){
        tds[i].style.backgroundColor = 'blue'
      } else{
        tds[i].style.backgroundColor = 'red'
      }
      let tablero = generarTablero();
      cantidadPorColor(tablero);
      let contColumnas = contadorColumna(tablero);
      for(let i = 0; i < contColumnas.length; i++){
        tdColumnas[i].textContent = 'Rojos: ' + contColumnas[i];
      }
      let contFilas = contadorFila(tablero);
      for(let i = 0; i < contFilas.length; i++){
        tdFilas[i].textContent = 'Rojos: ' + contFilas[i];
      }
    });
  }



 
  let tableroPrueba = [
    {numero: 1,color: 'red'},{numero: 2,color: 'blue'},{numero: 3,color: 'red'},{numero: 4,color: 'blue'},{numero: 5,color: 'red'},{numero: 6,color: 'blue'},{numero: 7,color: 'red'},{numero: 8,color: 'blue'},
    {numero: 9,color: 'blue'},{numero: 10,color: 'red'},{numero: 11,color: 'blue'},{numero: 12,color: 'red'},{numero: 13,color: 'blue'},{numero: 14,color: 'red'},{numero: 15,color: 'blue'},{numero: 16,color: 'red'},
    {numero: 17,color: 'red'},{numero: 18,color: 'blue'},{numero: 19,color: 'red'},{numero: 20,color: 'blue'},{numero: 21,color: 'red'},{numero: 22,color: 'blue'},{numero: 23,color: 'red'},{numero: 24,color: 'blue'},
    {numero: 25,color: 'blue'},{numero: 26,color: 'red'},{numero: 27,color: 'blue'},{numero: 28,color: 'red'},{numero: 29,color: 'blue'},{numero: 30,color: 'red'},{numero: 31,color: 'blue'},{numero: 32,color: 'red'},
    {numero: 33,color: 'red'},{numero: 34,color: 'blue'},{numero: 35,color: 'red'},{numero: 36,color: 'blue'},{numero: 37,color: 'red'},{numero: 38,color: 'blue'},{numero: 39,color: 'red'},{numero: 40,color: 'blue'},
    {numero: 41,color: 'blue'},{numero: 42,color: 'red'},{numero: 43,color: 'blue'},{numero: 44,color: 'red'},{numero: 45,color: 'blue'},{numero: 46,color: 'red'},{numero: 47,color: 'blue'},{numero: 48,color: 'red'},
    {numero: 49,color: 'red'},{numero: 50,color: 'blue'},{numero: 51,color: 'red'},{numero: 52,color: 'blue'},{numero: 53,color: 'red'},{numero: 54,color: 'blue'},{numero: 55,color: 'red'},{numero: 56,color: 'blue'},
    {numero: 57,color: 'blue'},{numero: 58,color: 'red'},{numero: 59,color: 'blue'},{numero: 60,color: 'red'},{numero: 61,color: 'blue'},{numero: 62,color: 'red'},{numero: 63,color: 'blue'},{numero: 64,color: 'red'}
]

contadorFila(tableroPrueba)