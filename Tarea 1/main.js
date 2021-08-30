function Identify(){
    let input_text = document.getElementById("Input").value;
    var number_array = input_text.split(',');
    var answer = 0;

    for (let i = 0; i<number_array.length; i++){
      answer = parseFloat(answer) + parseFloat(number_array[i]);
    }


    document.getElementById('Perimeter').innerHTML=answer;
    document.getElementById('Sides').innerHTML=number_array.length;

    switch(number_array.length) {
        case 2:
            document.getElementById('Shape').innerHTML= "Digon";
          break;
        case 3:
            document.getElementById('Shape').innerHTML= "Trígono";
          break;
          case 4:
            document.getElementById('Shape').innerHTML= "Tetrágono";
          break;
          case 5:
            document.getElementById('Shape').innerHTML= "Pentágono";
          break;
          case 6:
            document.getElementById('Shape').innerHTML= "Hexágono";
          break;
          case 7:
            document.getElementById('Shape').innerHTML= "Heptágono";
          break;
          case 8:
            document.getElementById('Shape').innerHTML= "Octágono";
          break;
          case 9:
            document.getElementById('Shape').innerHTML= "Nonágono";
          break;
          case 10:
            document.getElementById('Shape').innerHTML= "Decágono";
          break;
          case 11:
            document.getElementById('Shape').innerHTML= "Undecágono";
          break;
          case 12:
            document.getElementById('Shape').innerHTML= "Dodedecágono";
          break;
          case 13:
            document.getElementById('Shape').innerHTML= "Tridecágono";
          break;
          case 14:
            document.getElementById('Shape').innerHTML= "Tetradecágono";
          break;
          case 15:
            document.getElementById('Shape').innerHTML= "Pentadecágono";
          break;
          case 16:
            document.getElementById('Shape').innerHTML= "Hexadecágono";
          break;
          case 17:
            document.getElementById('Shape').innerHTML= "Heptadecágono";
          break;
          case 18:
            document.getElementById('Shape').innerHTML= "Octadecágono";
          break;
          case 19:
            document.getElementById('Shape').innerHTML= "Eneadecágono";
          break;
          case 20:
            document.getElementById('Shape').innerHTML= "Icoságono";
          break;
        default:
            document.getElementById('Shape').innerHTML= "Figura no reconocida (2-20 lados)";
            alert(number_array.length);
            break;
      }

}