function leap(){
    let input_value = document.getElementById("year").value;
    let ver = input_value % 4;
    if (ver==0 ){
        aalert("El año" + input_value + "es bisiesto");
    }

     }

    function char_validation(event){

       var tecla = parseInt(event.key);
       let input_value = document.getElementById("year").value;
    
       if (Number.isNaN(tecla)){
           let new_value = input_value.replae(event.key,"");
           document.getElementById("year").value=new_value;
           console.log(typeof input_value);
       }

      }
