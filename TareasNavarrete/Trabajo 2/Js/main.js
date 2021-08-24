

function leap(){

    let imput_value = document.getElementById("year").value;
    let ver = input_value % 4;
    if (ver == 0)
    {
        alert("El año: " + input_value + " es biciesto");
    }
}
