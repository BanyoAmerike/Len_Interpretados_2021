
var inputPerimeter;
var input_value ;

function CreateFigure()
{
    input_value = document.getElementById("input").value;

    if(input_value<=0 || input_value >21)
    {
        alert("Escribe unicamente números del 1 al 20");
    }
    else
    {  
        switch(input_value)
        {
            case '1': 
               document.getElementById("resultadoTipo").innerHTML = "Circulo";    
            break;
            case '2':
                alert("No existe");
                break;
            case '3':
                 document.getElementById("resultadoTipo").innerHTML = "Triángulo";
             break;
            case '4':
                 document.getElementById("resultadoTipo").innerHTML = "Cuadrado";
            break;
            case '5':
                 document.getElementById("resultadoTipo").innerHTML = "Pentágono";
                break;
            case '6':
                 document.getElementById("resultadoTipo").innerHTML = "Hexagono";
            break;
            case '7':
                 document.getElementById("resultadoTipo").innerHTML = "Heptagono";
            break;
            case '8':
                document.getElementById("resultadoTipo").innerHTML = "Octagono";
            break;
            case '9':
                document.getElementById("resultadoTipo").innerHTML = "Eneágono";
            break;
            case '10':
                document.getElementById("resultadoTipo").innerHTML = "Decágono";
            break;
            case '11':
                 document.getElementById("resultadoTipo").innerHTML = "Endecágono";
            break;
            case '12':
                 document.getElementById("resultadoTipo").innerHTML = "Dodecágono";
            break;
            case '13':
                document.getElementById("resultadoTipo").innerHTML = "Tridecágono";
            break;
            case '14':
               document.getElementById("resultadoTipo").innerHTML = "Tetradecágono";
            break;
            case '15':
               document.getElementById("resultadoTipo").innerHTML = "Pentedecágono";
            break;
            case '16':
                document.getElementById("resultadoTipo").innerHTML = "Hexadecágono";
            break;
            case '17':
                document.getElementById("resultadoTipo").innerHTML = "Heptadecágono";
            break;
            case '18':
                 document.getElementById("resultadoTipo").innerHTML = "Octadecágono";
            break;
            case '19':
                document.getElementById("resultadoTipo").innerHTML = "Eneadecágono";
            break;
            case '20':
                document.getElementById("resultadoTipo").innerHTML = "Icoságono";
            break;             
        }
    }   
}

function CalculatePerimeter()
{
  inputPerimeter = document.getElementById("input").value;

 if(input_value != 1)
  {
    var inputP =  parseInt(inputPerimeter);
    var inputV =  parseInt (input_value);
  
    var result = inputP * inputV;
  
    document.getElementById("resultadoPerimetro").innerHTML = result;
  }
  else
  {
      let inputRadius =  parseInt(inputPerimeter);
      let  result = 2 * inputRadius * 3.14;
    
      document.getElementById("resultadoPerimetro").innerHTML = result;
  } 
}

function key_validation(event)
{
    var inputBackup = document.getElementById("input").value;    
    let dato = parseInt(event.key);
        
    if(!Number.isInteger(dato))
    {
        let inputYear = document.getElementById("input");
        inputYear.value = inputBackup;
    }
    else
    {
    } 
}