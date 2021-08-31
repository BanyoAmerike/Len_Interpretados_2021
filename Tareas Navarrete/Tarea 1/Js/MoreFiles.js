function addFiles(){

        var InputValue = document.getElementById("sides").value;

        sideOne = document.getElementById("one");
        sideTwo = document.getElementById("two");
        sideThree = document.getElementById("three");
        sideFour = document.getElementById("four");
        sideFive = document.getElementById("five");
        sideSix = document.getElementById("six");
        sideSeven = document.getElementById("seven");
        sideEight = document.getElementById("eight");
        sideNine = document.getElementById("nine");
        sideTen = document.getElementById("ten");

        theInstruction = document.getElementById("moreInstruction");

        theButton = document.getElementById("nextButton");

        theFigure = document.getElementById("showFigure");
        thePerimeter = document.getElementById("showPerimeter");

        switch (InputValue)
        {
                case "3": 
                                sideOne.innerHTML = '<input id = "One" onkeypress= "return (event.charCode >= 48 && event.charCode <= 57)" >';
                                sideTwo.innerHTML = '<input id = "Two" onkeypress= "return (event.charCode >= 48 && event.charCode <= 57)" >';
                                sideThree.innerHTML = '<input id = "Three" onkeypress= "return (event.charCode >= 48 && event.charCode <= 57)" >';
                                sideFour.innerHTML = '<div id = "Four"> </div>';
                                sideFive.innerHTML = '<div id = "Five"> </div>';
                                sideSix.innerHTML = '<div id = "Six"> </div>';
                                sideSeven.innerHTML = '<div id = "Seven"> </div>';
                                sideEight.innerHTML = '<div id = "Eight"> </div>';
                                sideNine.innerHTML = '<div id = "Nine"> </div>';
                                sideTen.innerHTML = '<div id = "Ten"> </div>';

                                theButton.innerHTML = '<button type = "button" onclick = "typeOfFigure()" >Resultado</button>';
                                theFigure.innerHTML = "";
                                thePerimeter.innerHTML = "";

                                theInstruction.innerHTML = '<b> Llene las casillas con las distancias de cada lado </b>';
                break;

                case "4": 
                                sideOne.innerHTML = '<input id = "One" onkeypress= "return (event.charCode >= 48 && event.charCode <= 57)" >';
                                sideTwo.innerHTML = '<input id = "Two" onkeypress= "return (event.charCode >= 48 && event.charCode <= 57)" >';
                                sideThree.innerHTML = '<input id = "Three" onkeypress= "return (event.charCode >= 48 && event.charCode <= 57)" >';
                                sideFour.innerHTML = '<input id = "Four" onkeypress= "return (event.charCode >= 48 && event.charCode <= 57)" >';
                                sideFive.innerHTML = '<div id = "Five"> </div>';
                                sideSix.innerHTML = '<div id = "Six"> </div>';
                                sideSeven.innerHTML = '<div id = "Seven"> </div>';
                                sideEight.innerHTML = '<div id = "Eight"> </div>';
                                sideNine.innerHTML = '<div id = "Nine"> </div>';
                                sideTen.innerHTML = '<div id = "Ten"> </div>';

                                theButton.innerHTML = '<button type = "button" onclick = "typeOfFigure()" >Resultado</button>';
                                theFigure.innerHTML = "";
                                thePerimeter.innerHTML = "";

                                theInstruction.innerHTML = '<b> Llene las casillas con las distancias de cada lado </b>';
                break;

                case "5": 
                                sideOne.innerHTML = '<input id = "One" onkeypress= "return (event.charCode >= 48 && event.charCode <= 57)" >';
                                sideTwo.innerHTML = '<input id = "Two" onkeypress= "return (event.charCode >= 48 && event.charCode <= 57)" >';
                                sideThree.innerHTML = '<input id = "Three" onkeypress= "return (event.charCode >= 48 && event.charCode <= 57)" >';
                                sideFour.innerHTML = '<input id = "Four" onkeypress= "return (event.charCode >= 48 && event.charCode <= 57)" >';
                                sideFive.innerHTML = '<input id = "Five" onkeypress= "return (event.charCode >= 48 && event.charCode <= 57)" >';
                                sideSix.innerHTML = '<div id = "Six"> </div>';
                                sideSeven.innerHTML = '<div id = "Seven"> </div>';
                                sideEight.innerHTML = '<div id = "Eight"> </div>';
                                sideNine.innerHTML = '<div id = "Nine"> </div>';
                                sideTen.innerHTML = '<div id = "Ten"> </div>';

                                theButton.innerHTML = '<button type = "button" onclick = "typeOfFigure()" >Resultado</button>';
                                theFigure.innerHTML = "";
                                thePerimeter.innerHTML = "";

                                theInstruction.innerHTML = '<b> Llene las casillas con las distancias de cada lado </b>';
                break;

                case "6": 
                                sideOne.innerHTML = '<input id = "One" onkeypress= "return (event.charCode >= 48 && event.charCode <= 57)" >';
                                sideTwo.innerHTML = '<input id = "Two" onkeypress= "return (event.charCode >= 48 && event.charCode <= 57)" >';
                                sideThree.innerHTML = '<input id = "Three" onkeypress= "return (event.charCode >= 48 && event.charCode <= 57)" >';
                                sideFour.innerHTML = '<input id = "Four" onkeypress= "return (event.charCode >= 48 && event.charCode <= 57)" >';
                                sideFive.innerHTML = '<input id = "Five" onkeypress= "return (event.charCode >= 48 && event.charCode <= 57)" >';
                                sideSix.innerHTML = '<input id = "Six" onkeypress= "return (event.charCode >= 48 && event.charCode <= 57)" >';
                                sideSeven.innerHTML = '<div id = "Seven"> </div>';
                                sideEight.innerHTML = '<div id = "Eight"> </div>';
                                sideNine.innerHTML = '<div id = "Nine"> </div>';
                                sideTen.innerHTML = '<div id = "Ten"> </div>';

                                theButton.innerHTML = '<button type = "button" onclick = "typeOfFigure()" >Resultado</button>';
                                theFigure.innerHTML = "";
                                thePerimeter.innerHTML = "";

                                theInstruction.innerHTML = '<b> Llene las casillas con las distancias de cada lado </b>';
                break;

                case "7": 
                                sideOne.innerHTML = '<input id = "One" onkeypress= "return (event.charCode >= 48 && event.charCode <= 57)" >';
                                sideTwo.innerHTML = '<input id = "Two" onkeypress= "return (event.charCode >= 48 && event.charCode <= 57)" >';
                                sideThree.innerHTML = '<input id = "Three" onkeypress= "return (event.charCode >= 48 && event.charCode <= 57)" >';
                                sideFour.innerHTML = '<input id = "Four" onkeypress= "return (event.charCode >= 48 && event.charCode <= 57)" >';
                                sideFive.innerHTML = '<input id = "Five" onkeypress= "return (event.charCode >= 48 && event.charCode <= 57)" >';
                                sideSix.innerHTML = '<input id = "Six" tonkeypress= "return (event.charCode >= 48 && event.charCode <= 57)" >';
                                sideSeven.innerHTML = '<input id = "Seven" onkeypress= "return (event.charCode >= 48 && event.charCode <= 57)" >';
                                sideEight.innerHTML = '<div id = "Eight"> </div>';
                                sideNine.innerHTML = '<div id = "Nine"> </div>';
                                sideTen.innerHTML = '<div id = "Ten"> </div>';

                                theButton.innerHTML = '<button type = "button" onclick = "typeOfFigure()" >Resultado</button>';
                                theFigure.innerHTML = "";
                                thePerimeter.innerHTML = "";

                                theInstruction.innerHTML = '<b> Llene las casillas con las distancias de cada lado </b>';
                break;

                case "8": 
                                sideOne.innerHTML = '<input id = "One" onkeypress= "return (event.charCode >= 48 && event.charCode <= 57)" >';
                                sideTwo.innerHTML = '<input id = "Two" onkeypress= "return (event.charCode >= 48 && event.charCode <= 57)" >';
                                sideThree.innerHTML = '<input id = "Three" onkeypress= "return (event.charCode >= 48 && event.charCode <= 57)" >';
                                sideFour.innerHTML = '<input id = "Four" onkeypress= "return (event.charCode >= 48 && event.charCode <= 57)" >';
                                sideFive.innerHTML = '<input id = "Five" onkeypress= "return (event.charCode >= 48 && event.charCode <= 57)" >';
                                sideSix.innerHTML = '<input id = "Six" onkeypress= "return (event.charCode >= 48 && event.charCode <= 57)" >';
                                sideSeven.innerHTML = '<input id = "Seven" onkeypress= "return (event.charCode >= 48 && event.charCode <= 57)" >';
                                sideEight.innerHTML = '<input id = "Eight" onkeypress= "return (event.charCode >= 48 && event.charCode <= 57)" >';
                                sideNine.innerHTML = '<div id = "Nine"> </div>';
                                sideTen.innerHTML = '<div id = "Ten"> </div>';

                                theButton.innerHTML = '<button type = "button" onclick = "typeOfFigure()" >Resultado</button>';
                                theFigure.innerHTML = "";
                                thePerimeter.innerHTML = "";

                                theInstruction.innerHTML = '<b> Llene las casillas con las distancias de cada lado </b>';
                break;

                case "9": 
                                sideOne.innerHTML = '<input id = "One" onkeypress= "return (event.charCode >= 48 && event.charCode <= 57)" >';
                                sideTwo.innerHTML = '<input id = "Two" onkeypress= "return (event.charCode >= 48 && event.charCode <= 57)" >';
                                sideThree.innerHTML = '<input id = "Three" onkeypress= "return (event.charCode >= 48 && event.charCode <= 57)" >';
                                sideFour.innerHTML = '<input id = "Four" onkeypress= "return (event.charCode >= 48 && event.charCode <= 57)" >';
                                sideFive.innerHTML = '<input id = "Five" onkeypress= "return (event.charCode >= 48 && event.charCode <= 57)" >';
                                sideSix.innerHTML = '<input id = "Six" onkeypress= "return (event.charCode >= 48 && event.charCode <= 57)" >';
                                sideSeven.innerHTML = '<input id = "Seven" onkeypress= "return (event.charCode >= 48 && event.charCode <= 57)" >';
                                sideEight.innerHTML = '<input id = "Eight" onkeypress= "return (event.charCode >= 48 && event.charCode <= 57)" >';
                                sideNine.innerHTML = '<input id = "Nine" onkeypress= "return (event.charCode >= 48 && event.charCode <= 57)" >';
                                sideTen.innerHTML = '<div id = "Ten"> </div>';

                                theButton.innerHTML = '<button type = "button" onclick = "typeOfFigure()" >Resultado</button>';
                                theFigure.innerHTML = "";
                                thePerimeter.innerHTML = "";

                                theInstruction.innerHTML = '<b> Llene las casillas con las distancias de cada lado </b>';
                break;

                case "10": 
                                sideOne.innerHTML = '<input id = "One" onkeypress= "return (event.charCode >= 48 && event.charCode <= 57)" >';
                                sideTwo.innerHTML = '<input id = "Two" onkeypress= "return (event.charCode >= 48 && event.charCode <= 57)" >';
                                sideThree.innerHTML = '<input id = "Three" onkeypress= "return (event.charCode >= 48 && event.charCode <= 57)" >';
                                sideFour.innerHTML = '<input id = "Four" onkeypress= "return (event.charCode >= 48 && event.charCode <= 57)" >';
                                sideFive.innerHTML = '<input id = "Five" onkeypress= "return (event.charCode >= 48 && event.charCode <= 57)" >';
                                sideSix.innerHTML = '<input id = "Six" onkeypress= "return (event.charCode >= 48 && event.charCode <= 57)" >';
                                sideSeven.innerHTML = '<input id = "Seven" onkeypress= "return (event.charCode >= 48 && event.charCode <= 57)" >';
                                sideEight.innerHTML = '<input id = "Eight" onkeypress= "return (event.charCode >= 48 && event.charCode <= 57)" >';
                                sideNine.innerHTML = '<input id = "Nine" onkeypress= "return (event.charCode >= 48 && event.charCode <= 57)" >';
                                sideTen.innerHTML = '<input id = "Ten" onkeypress= "return (event.charCode >= 48 && event.charCode <= 57)" >';

                                theButton.innerHTML = '<button type = "button" onclick = "typeOfFigure()" >Resultado</button>';
                                theFigure.innerHTML = "";
                                thePerimeter.innerHTML = "";

                                theInstruction.innerHTML = '<b> Llene las casillas con las distancias de cada lado </b>';
                break;

                default:
                        sideOne.innerHTML = "";
                        sideTwo.innerHTML = "";
                        sideThree.innerHTML = "";
                        sideFour.innerHTML = "";
                        sideFive.innerHTML = "";
                        sideSix.innerHTML = "";
                        sideSeven.innerHTML = "";
                        sideEight.innerHTML = "";
                        sideNine.innerHTML = "";
                        sideTen.innerHTML = "";
                break;
        }

}

function typeOfFigure()
{
        var InputValue = document.getElementById("sides").value;

        theFigure = document.getElementById("showFigure");
        thePerimeter = document.getElementById("showPerimeter");



        let perimeter;

        sideOne = document.getElementById("One").value;
        sideTwo = document.getElementById("Two").value;
        sideThree = document.getElementById("Three").value;
        sideFour = document.getElementById("Four").value;
        sideFive = document.getElementById("Five").value;
        sideSix = document.getElementById("Six").value;
        sideSeven = document.getElementById("Seven").value;
        sideEight = document.getElementById("Eight").value;
        sideNine = document.getElementById("Nine").value;
        sideTen = document.getElementById("Ten").value;

        operation = 0;

        switch (InputValue){

                case "3":
                        operation = parseFloat(sideOne) + parseFloat(sideTwo) + parseFloat(sideThree);
                        theFigure.innerHTML = '<b> La figura es un triangulo </b>';
                        perimeter = "Su perímetro es: " + operation;
                        thePerimeter.innerHTML = perimeter;
                        theButton.innerHTML = '<button type = "button" onclick = "reload()" >Reiniciar</button>';

         
                break;

                case "4":
                        operation = parseFloat(sideOne) + parseFloat(sideTwo) + parseFloat(sideThree) + parseFloat(sideFour);
                        theFigure.innerHTML = '<b> La figura es un cuadrado </b>';
                        perimeter = "Su perímetro es: " + operation;
                        thePerimeter.innerHTML = perimeter;
                        theButton.innerHTML = '<button type = "button" onclick = "reload()" >Reiniciar</button>';
                break;

                case "5":
                        operation = parseFloat(sideOne) + parseFloat(sideTwo) + parseFloat(sideThree) + parseFloat(sideFour) + parseFloat(sideFive);
                        theFigure.innerHTML = '<b> La figura es un pentágono </b>';
                        perimeter = "Su perímetro es: " + operation;
                        thePerimeter.innerHTML = perimeter;
                        theButton.innerHTML = '<button type = "button" onclick = "reload()" >Reiniciar</button>';
                break;

                case "6":
                        operation = parseFloat(sideOne) + parseFloat(sideTwo) + parseFloat(sideThree) + parseFloat(sideFour) + parseFloat(sideFive)
                        + parseFloat (sideSix);
                        theFigure.innerHTML = '<b> La figura es un hexágono </b>';
                        perimeter = "Su perímetro es: " + operation;
                        thePerimeter.innerHTML = perimeter;
                        theButton.innerHTML = '<button type = "button" onclick = "reload()" >Reiniciar</button>';
                break;

                case "7":
                        operation = parseFloat(sideOne) + parseFloat(sideTwo) + parseFloat(sideThree) + parseFloat(sideFour) + parseFloat(sideFive)
                        + parseFloat(sideSix) + parseFloat(sideSeven);
                        theFigure.innerHTML = '<b> La figura es un heptágono </b>';
                        perimeter = "Su perímetro es: " + operation;
                        thePerimeter.innerHTML = perimeter;
                        theButton.innerHTML = '<button type = "button" onclick = "reload()" >Reiniciar</button>';
                break;

                case "8":
                        operation = parseFloat(sideOne) + parseFloat(sideTwo) + parseFloat(sideThree) + parseFloat(sideFour) + parseFloat(sideFive)
                        + parseFloat(sideSix) + parseFloat(sideSeven) + parseFloat(sideEight);
                        theFigure.innerHTML = '<b> La figura es un octágono </b>';
                        perimeter = "Su perímetro es: " + operation;
                        thePerimeter.innerHTML = perimeter;
                        theButton.innerHTML = '<button type = "button" onclick = "reload()" >Reiniciar</button>';
                break;

                case "9":
                        operation = parseFloat(sideOne) + parseFloat(sideTwo) + parseFloat(sideThree) + parseFloat(sideFour) + parseFloat(sideFive)
                        + parseFloat(sideSix) + parseFloat(sideSeven) + parseFloat(sideEight) + parseFloat(sideNine);
                        theFigure.innerHTML = '<b> La figura es un eneágono </b>';
                        perimeter = "Su perímetro es: " + operation;
                        thePerimeter.innerHTML = perimeter;
                        theButton.innerHTML = '<button type = "button" onclick = "reload()" >Reiniciar</button>';
                break;

                case "10":
                        operation = parseFloat(sideOne) + parseFloat(sideTwo) + parseFloat(sideThree) + parseFloat(sideFour) + parseFloat(sideFive)
                        + parseFloat(sideSix) + parseFloat(sideSeven) + parseFloat(sideEight) + parseFloat(sideNine) + parseFloat(sideTen);
                        theFigure.innerHTML = '<b> La figura es un decágono </b>';
                        perimeter = "Su perímetro es: " + operation;
                        thePerimeter.innerHTML = perimeter;
                        theButton.innerHTML = '<button type = "button" onclick = "reload()" >Reiniciar</button>';
                break;
        }
}

function reload()
{
        sideOne = document.getElementById("one");
        sideTwo = document.getElementById("two");
        sideThree = document.getElementById("three");
        sideFour = document.getElementById("four");
        sideFive = document.getElementById("five");
        sideSix = document.getElementById("six");
        sideSeven = document.getElementById("seven");
        sideEight = document.getElementById("eight");
        sideNine = document.getElementById("nine");
        sideTen = document.getElementById("ten");

        theInstruction = document.getElementById("moreInstruction");

        theButton = document.getElementById("nextButton");

        theFigure = document.getElementById("showFigure");
        thePerimeter = document.getElementById("showPerimeter");

        sideOne.innerHTML = '<div id = "one"> </div>';
        sideTwo.innerHTML = '<div id = "two"> </div>';
        sideThree.innerHTML = '<div id = "three"> </div>';
        sideFour.innerHTML = '<div id = "four"> </div>';
        sideFive.innerHTML = '<div id = "five"> </div>';
        sideSix.innerHTML = '<div id = "six"> </div>';
        sideSeven.innerHTML = '<div id = "seven"> </div>';
        sideEight.innerHTML = '<div id = "eight"> </div>';
        sideNine.innerHTML = '<div id = "nine"> </div>';
        sideTen.innerHTML = '<div id = "ten"> </div>';

        theButton.innerHTML = "";
        theFigure.innerHTML = "";
        thePerimeter.innerHTML = "";

        theInstruction.innerHTML = "";

}