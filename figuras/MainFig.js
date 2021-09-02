//18 figuras del triangulo al isodecagono 
//necersito definir lados, las figuras, area y apotemas
// Esta accion debe de hacerse despues de que te de la figura
//Tener el boton de area invisible hasta que se tenga la figura?


function fig(){
    var typeOfFigure = ["triangulo", 'cuadrado', 'pentágono', 'hexágono', 'heptágono', 'octágono', 'nonágono', 'decágono', 'undecágono',
        'dodecágono', 'tridecágono', 'tetradecágono', 'pentedecágono', 'hexadecágono', 'heptadecágono', 'octadecágono', 'eneadecágono', 'isodecágono'];
    
    document.getElementById("result").style.display = "initial";
    let input_text = document.getElementById("lados").value
    var number_array = input_text.split(',');
    var sides = 0;

    for (let i = 0; i<number_array.lenght; i++){
        sides = parseFloat(sides) + parseFloat(number_array[i]);
    }
    document.getElementById('Figura').value = typeOfFigure[number_array.lenght-1];
    document.getElementById('Perimetro').value = sides;

}

   

