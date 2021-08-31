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
            document.getElementById('Shape').innerHTML= "Trigono";
          break;
          case 4:
            document.getElementById('Shape').innerHTML= "Tetragono";
          break;
          case 5:
            document.getElementById('Shape').innerHTML= "Pentagono";
          break;
          case 6:
            document.getElementById('Shape').innerHTML= "Hexagono";
          break;
          case 7:
            document.getElementById('Shape').innerHTML= "Heptagono";
          break;
          case 8:
            document.getElementById('Shape').innerHTML= "Octagono";
          break;
          case 9:
            document.getElementById('Shape').innerHTML= "Nonagono";
          break;
          case 10:
            document.getElementById('Shape').innerHTML= "Decagono";
          break;
          case 11:
            document.getElementById('Shape').innerHTML= "Undecagono";
          break;
          case 12:
            document.getElementById('Shape').innerHTML= "Dodedecagono";
          break;
          case 13:
            document.getElementById('Shape').innerHTML= "Tridecagono";
          break;
          case 14:
            document.getElementById('Shape').innerHTML= "Tetradecagono";
          break;
          case 15:
            document.getElementById('Shape').innerHTML= "Pentadecagono";
          break;
          case 16:
            document.getElementById('Shape').innerHTML= "Hexadecagono";
          break;
          case 17:
            document.getElementById('Shape').innerHTML= "Heptadecagono";
          break;
          case 18:
            document.getElementById('Shape').innerHTML= "Octadecagono";
          break;
          case 19:
            document.getElementById('Shape').innerHTML= "Eneadecagono";
          break;
          case 20:
            document.getElementById('Shape').innerHTML= "Icosagono";
          break;
        default:
            document.getElementById('Shape').innerHTML= "No tenemos esa figura";
            alert(number_array.length);
            break;
      }

}