// programa que identifica si un año es biciesto o no
// entrada 4 digitos, numero positivo o negativo
// como identifica año biciesto? se repite cada 4

function leap()
{
    let input_value = document.getElementById("year").value;
    let ver = input_value % 4;
    if(ver == 0)
    {
        alert("El año"+ input_value+ "es biciesto");
    }

}

function keyValidation(event)
{
    //Respalda informacion antes de insertar el valor
    var input_backup = document.getElementById("year").value;

    // Valida que el valor sea numerico
    if (!Number.isInteger(event.key)) 
    {
        alert("Por favor introduce solo numeros enteros");
    }
    
}