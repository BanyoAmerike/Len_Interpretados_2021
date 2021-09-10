function Identify() {
    var shapes = ['circulo', 'Tr�gono', 'Tetr�gono', 'Pent�gono', 'Hex�gono', 'Oct�gono', 'Non�gono', 'Dec�gono',
        'Undec�gono', 'Dodec�gono', 'Tridec�gono', 'Tetradec�gono', 'Pentadec�gono', 'Hexadec�gono', 'Heptadec�gono', 'Octadec�gono', 'Eneadec�gono', 'Icos�gono']

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