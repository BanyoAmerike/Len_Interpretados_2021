// JavaScript source code

function leap()
{
    let inpput_value = document.getElementById("year").value;
    let ver = inpput_value % 4;
    if (ver == 0)
    {
        alert("El a�o " + inpput_value + "es biciesto :D");
    }
}
function key_validation(event)
{
    let dato = parseInt(event.key);
    if (!Number.isInteger(dato)) {
        alert("Escribe puros n�meros, gato");
    }
    else
    {

    }
}