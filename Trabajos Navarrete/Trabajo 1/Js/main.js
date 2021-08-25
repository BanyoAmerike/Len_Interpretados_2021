

function leap(){

    let input_value = document.getElementById("year").value;
    let ver = input_value % 4;
    if (ver == 0)
    {
        alert("El año: " + input_value + " es biciesto");
    }
}

function Key_validation(event){

    var input_backup = document.getElementById("year").value;

    let dato = parseInt(event.keyCode);

    if(!Number.isInteger(dato))
    {
        alert("Escriba unicamente numeros");
        let input_year = document.getElementById("year");
        input_year.value = input_backup;
    }
    
}
