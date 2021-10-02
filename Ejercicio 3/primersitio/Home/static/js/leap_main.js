// JavaScript source code

function leap()
{
    let inpput_value = document.getElementById("year").value;
    let ver = inpput_value % 4;
    if (ver == 0)
    {
        alert("El año " + inpput_value + "es biciesto :D");
    }
}
function charValidation(event)
{
    var key = parseInt(event.key);
    let input_value = document.getElementById("year").value;

    if (Number.isNaN(key))
    {
        let new_value = input_value.replae(event.key, "");
        document.getElementById("year").value = new_value;
        console.log(typeof input_value);
    }
}