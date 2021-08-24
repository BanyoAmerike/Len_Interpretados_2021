//Programa que identifica que es un año biciesto
//realizar una entrada


function leap()
{
    let input_value = document.getElementById("year").value;
    let ver = input_value % 4;
    if(ver == 0) alert('Este año ' + input_value + " es biciesto");

    
}

//Referencia al documento