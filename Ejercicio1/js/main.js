//Programa que identifica que es un año biciesto
//realizar una entrada


function leap()
{
    let input_value = document.getElementById("year").value;
    let ver = input_value % 4;
    if(ver == 0) alert('Este año ' + input_value + " es biciesto");  
}

function key_validation(event)
    {
        //Respaldar info antes de que se agregue la tecla
        var inputBackup = document.getElementById("year").value;




        //Se hace validación si es tecla num
        let dato = parseInt(event.key);

        if(!Number.isInteger(dato))
        {
        //Se debe regresar la informacion respaldada
            alert("Escribe unicamente numeros por favor " + event.key); 
            let inputYear = document.getElementById("year");
            inputYear.value = inputBackup;
        }
        else
        {
            //se regresa el respaldo con el nuevo dato 

        } 
    }


//Referencia al documento