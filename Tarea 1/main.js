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