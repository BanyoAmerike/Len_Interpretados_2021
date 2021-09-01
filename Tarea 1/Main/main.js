function split()
{
    let input_value = document.getElementById("string").value;


}

function shapeGet()
{
    var shapes =['Triangulo','Rectángulo','Pentágono','Hexágono','Heptágono','Octágono'
    ,'Nonágono','Decágono','Endecágono','Dodecágono','Tridecágono','Tetradecágono'
    ,'Pentadecágono','Hexadecágono','Heptadecágono','Octadecágono','Eneadecágono','Icosaigono']

    let input_value = document.getElementById("string");
    var num_array = input.split(',');
    var result = 0;

    for (let i = 0; i < num_array.length; i++) {
        const element = array[index];
        
    }

     
}

function keyValidation(event)
{
    var tecla = parseInt(event.key);
    let input_value = document.getElementById("string");

    // Valida que el valor sea numerico
    if (Number.isNaN(tecla)) 
    {
        //alert("Por favor introduce solo numeros enteros");
        let new_value = input_value.replaceChild(event.key,"");
        document.getElementById("year").value = new_value;
        console.log(typeof input_value);
    }
    
}