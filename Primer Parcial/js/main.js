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
