//Programa que identifica si es biciesto o no

//entrada 1234 positivo negativo 

//como yo se que es biciesto?
    //365 dias
    //se repite cada 4

    

    function leap(){
        let input_value = document.getElementById("year").value;
        let ver = 2020 % 4; 
        if (ver ==0){
            console.log("es biciesto");
        }



        alert(' Este es el valor del imput' + input_value + "El año es biciesto");
    }