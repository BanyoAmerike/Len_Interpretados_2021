function cube(){

var input_value = document.getElementById("number").value;
    var answer = input_value * input_value * input_value;

    let myH1 = document.createElement("h1");
    myH1.innerText = answer;
    document.getElementById("mydiv").append(myH1);
}