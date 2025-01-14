const validator = {
  // ...  
  isValid: (creditCardNumber) => { //en isValid (parámetro) se guarda el valor de la función anónima
   
    //algoritmo de Luhn
    creditCardNumber = creditCardNumber.toString(); //para asegurar de que el parámetro sea string//

    let reverse = ""; // se guarda la tarjeta dada vuelta
    let sumaFinal = 0; //si la seteo en vacía va a ser string, si la seteo en cero es numérica. Acumula el resultado de cada dígito procesado en el ciclo for.
  
    //primer ciclo for para invertir el número
    for (let i = creditCardNumber.length - 1; i >= 0; i--) {
      const numeroEnLectura = creditCardNumber.charAt(i);
      reverse = reverse + numeroEnLectura.toString(); //para concatenar
    }

    //multiplica todos los segundos números (índices impares) *2 y suma los numeros que tienen dos dígitos
    for (let i = 0; i < reverse.length; i++){

      let numeroEnLectura = reverse.charAt(i);

      const resto = i % 2; //para poder identificar que índice es par o impar
      if (resto === 1) { // Esto solo pasa cuando el indice sea impar
        //console.log("par " + numeroEnLectura)

        numeroEnLectura = parseInt(numeroEnLectura) * 2; //parseInt transforma a numérico y multiplica por dos
        if (numeroEnLectura > 9) { //si el numero tiene mas de 2 dígitos

          const dobleDigito = numeroEnLectura.toString();
          const digitoPrimario = dobleDigito.charAt(0);
          const digitoSecundario = dobleDigito.charAt(1);

          //let dobleDigito = numeroEnLectura.toString().charAt(0); opción para optimizar el código

          numeroEnLectura = parseInt(digitoPrimario) + parseInt(digitoSecundario); //toma la variable numeroEnLectura y le asigna el valor de la suma de dígitos
        }
      }
      sumaFinal = sumaFinal + parseInt(numeroEnLectura); //sumaFinal += parseInt(numeroEnLectura)
    }

    if (sumaFinal %10 === 0){ //verifica si es múltiplo de 10
      return true;
    } else { 
      return false;
    }
  },

  maskify: (creditCardNumber) => {

    creditCardNumber = creditCardNumber.toString();

    let numeroOculto = "";
    for (let i = 0; i < creditCardNumber.length; i++) {

      if (i < creditCardNumber.length - 4) {
        numeroOculto = numeroOculto + "#";
      } else {
        numeroOculto = numeroOculto + creditCardNumber[i];  //numeroOculto += creditCardNumber[i]
      }
    }

    return numeroOculto;
  },


};


export default validator;


