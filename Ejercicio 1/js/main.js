// JavaScript source code

function leap()
{
    let inpput_value = document.getElementById("year").value;
    let ver = inpput_value % 4;
    if (ver == 0)
    {
        alert("Este es el valor del input" + inpput_value);
    }
}
function key_validation(event)
{
    let dato = parseInt(event.key);
    if (!Number.isInteger(dato)) {
        alert("Escribe puros números, gato");
    }
    else
    {

    }
}