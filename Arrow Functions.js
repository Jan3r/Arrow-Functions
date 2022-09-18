/* Ejemplo 1 */

const Alcuadrado = (num) => num*num;

  const cuadrado = (callback,arreglo)=>{
    const arregloM = arreglo.forEach(element => {
      return callback(element);
    });

    return arregloM
  }

  let array = [5, 8, 9, 2];
  cuadrado(Alcuadrado,array);

  /* Ejemplo 2 */

  function filter(numeross, callback) {
    let results = [];
    for (const numeros of numeross) {
      if (callback(numeros)) {
        results.push(numeros);
      }
    }
    return results;
  }
  
  let numeross = [1, 2, 4, 7, 3, 5, 6];
  
  let oddNumeros = filter(numeross, function (numeros) {
    return numeros % 2 != 0;
  });
  
  console.log(oddNumeros);


  /* EJemplo 3 */

  const doTask = (iteracion, callback) => { // iteracion indica los numeros de los lanzamientos 
    const numbers = [];
    for (let i = 0; i < iteracion; i++) {
      const number = 1 + Math.floor(Math.random() * 6);
      numbers.push(number);
      if (number === 6) {
        /* En el if cuando number es 6 (detectamos como error cuando obtenemos un 6 */
        callback({
          error: true,
          message: "Se ha sacado un 6"
        });
        return;
      }
    }
    /* Termina bucle y no se ha sacado 6 */
    return callback(null, {
      error: false,
      value: numbers
    });
  }
  
  doTask(10, function(err, result) {
    if (err) {
      console.error( err.message);
      return;
    }
    console.log("Tiradas correctas: ", result.value);
  });
