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

var tecla = parseInt(event.key); 
var input_value = document.getElementById("year").value;

if (Number.isNaN(tecla)){
    alert("La tecla no es un Número, ingresa solo número por favor");
    let newValue = input_value.replace(event.key,"");
    document.getElementById("year").value = newValue;
    console.log(typeof input_value);
}
}
