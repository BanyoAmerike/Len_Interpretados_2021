// Programa que identifica que es biciesto o no

// entrada 1234, 230 positivo, negativo

// Como yo se que es biciesto?
    // 366 dias
    // se repite cada 4

    

function leap(){
    let input_value = document.getElementById("year").value;
    let ver = input_value % 4;
    if (ver == 0){
        alert("El año " + input_value + " es biciesto");
    }
}

