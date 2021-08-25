//Programa que identifica si es biciesto o no

//entrada 1234 positivo negativo 

//como yo se que es biciesto?
    //365 dias
    //se repite cada 4

    

function leap(){
        let input_value = document.getElementById("year").value;
        let ver = input_value % 4; 
        if (ver ==0){
            alert("El año " + input_value + "es biciesto");

        }
}

function key_validation(event){
    //respaldar la informacion antes de biciestoue se agregrue la tecla

    var input_backup = document.getElementById("year").value;

    //se hace la validacion de que la tecla sea numerica   
    let dato = parseInt(event.key);

    if(!Number.isInteger(dato)){
        //se debe regresar la informacion respaldada
        alert("Escribe unicamente numeros");
        let input_year = document.getElementById("year");
        innput_year.vaalue = input_backup
    }
}

function mouse_click(event){
    alert("acabas de hacer click en el inpt");
}