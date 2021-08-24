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
      let ver = 2020 % 4;
      if (ver == 0){
          alert("El año " + "es biciesto")
      }
  }

  alert("Wenas joven");