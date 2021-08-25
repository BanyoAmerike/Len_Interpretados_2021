function leap(){
    let input_value = document.getElementById("year").value;
    if (input_value%4 == 0){
        if(input_value%100 == 0){
            if(input_value%400 == 0){
                alert("Es bisiesto");
            } else {
                alert ("No es bisiesto");
            }
        } else {
            alert ("Es bisiesto");
        }       
    } else{
        alert ("No es bisiesto");
    }
}

function key_validation(event){

    //Respaldar informacion 
var input_backup = document.getElementById("year").value;

   let dato = parseInt (event.key);


   if (!Number.isInteger(dato)){

    //Se debe regresar la informacion respaldada
       alert("Escribe solo numeros por favor");
       let input_year = document.getElementById("year");
       input_year.value = input_backup;
   } else {
    //Se regresa el respaldo con el nuevo dato 
   }
}