// programa quie identifica que es biciesto o no

// entrada 1234, 230 positivo, negativo

// ¿como yo se que es biciesto?
  //366 dias
  // se repite cada 4 años

  var ver  = 2020 % 4;
  if (ver == 0) {
      console.log("Es biciesto")
  }

  function leap () {
      let imput_Value = document.getElementById("year").value
      let ver = input_value % 4;
      if (ver == 0){
          alert("El año " + input_value + "es biciesto");
      }
  }

  function key_validation(event){

    //respaldar la informacion antes de que se agregue la tecla


    // Se hace la validacion que la tecla sea numerica
    let dato = parseInt(event.key);
    
    if(!Number.isInteger(dato)){
        //Se debe regresar la informacion respaldada
        alert("Solo escribe numeros");
    }
    
  }

