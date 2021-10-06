// programa que identifica si un año es bisiesto o no
// entrada 4 digitos, numero positivo o negativo
// como identifica año bisiesto? se repite cada 4

function leap()
{
    let input_value = document.getElementById("year").value;
    let ver = input_value % 4;
    if(ver == 0)
    {
        alert("El año "+ input_value+ " es bisiesto");
    }else {alert("El año "+ input_value+" es bisiesto" );}

}

function keyValidation(event)
{
    var tecla = parseInt(event.key);
    let input_value = document.getElementById("year");

    // Valida que el valor sea numerico
    if (Number.isNaN(tecla)) 
    {
        //alert("Por favor introduce solo numeros enteros");
        let new_value = input_value.replaceChild(event.key,"");
        document.getElementById("year").value = new_value;
        console.log(typeof input_value);
    }
    
}