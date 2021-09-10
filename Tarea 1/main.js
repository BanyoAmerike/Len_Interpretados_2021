function Identify() {
    var shapes = ['circulo', 'Trígono', 'Tetrágono', 'Pentágono', 'Hexágono', 'Octágono', 'Nonágono', 'Decágono',
        'Undecágono', 'Dodecágono', 'Tridecágono', 'Tetradecágono', 'Pentadecágono', 'Hexadecágono', 'Heptadecágono', 'Octadecágono', 'Eneadecágono', 'Icoságono']

    let input_text = document.getElementById("input").value;
    var number_array = input_text.split(',');
    var answer = 0;

    for (let i = 0; i < number_array.length; i++)
    {
        answer = parseFloat(answer) + parseFloat(number_array[i]);
    }

    document.getElementById('Perimeter').innerHTML = answer;
    document.getElementById('Sides').innerHTML = number_array.length;
    document.getElementById('Shape').innerHTML = shapes[number_array.length - 2];
}