  /* EJemplo 1 */
  
  const saludar = (nombre, edad) => {
	console.log(`Hola ${nombre} tu edad es de ${edad} años`);
};
// Llama a saludar y pasarle argumentos
setTimeout(saludar, 2000, "Janer", 18);

const saludar2 = saludar.valueOf();
console.log(saludar)


  /* Ejemplo 2 */
  let userID = (id,callback) => { // parametros id y callback 
    user = {                      // el callback es ejecutado internamente en la función userID
        name: "Janer", id 
    };
    callback(user) // el callback es llamado como parametro cuando se usa userID
  }
  userID(1,(user)=>{
    console.log("usuario",user);
  });

  console.log(userID.length);

/* Ejemplo 3 */

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


