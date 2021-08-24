function leap(){
    let imput_value = document.getElementById("year").value; 
 var ver = 2020 % 4;
 if (ver == 0){
     console.log("Es biciesto");
 }
 alert ("El año" +  imput_value + "es biciesto") ;
 
 }