let my_hero_academia = {
    "squadName":"Clase A",
    "school":"UA",
    "formed":2017,
    "active":true,
    "members":[
       {
          "heroName":"Deku",
          "age":16,
          "lifePoints": 30,
          "basePower": 20,
          "defense": 20,
          "secretIdentity":"Izuku Midoriya",
          "powers":[
             "Shoot-style",
             "Delaware Smash",
             "OFA Full Cowl 20%"
          ]
       },
       {
          "heroName":"Uravity",
          "age":16,
          "lifePoints": 18,
          "basePower": 10,
          "defense": 10,
          "secretIdentity":"Ochako Uraraka",
          "powers":[
             "Gravity control",
             "Martial Arts"
          ]
       },
       {          
          "heroName":"Eraser Head",
          "age":32,
          "lifePoints": 30,
          "basePower": 15,
          "defense": 15,
          "secretIdentity":"Shota Aizawa",
          "powers":[
             "Quirk Erase",
             "Scarf Control"             
          ]
       },
       {          
        "heroName":"Lemillion",
        "age":17,
        "lifePoints": 30,
        "basePower": 30,
        "defense": 20,
        "secretIdentity":"Mirio Togata",
        "powers":[
           "Quirkless",
           "Combat experience"             
        ]
     }
    ]
 }

// Se crea un nuevo elemento (objeto html)
let myH1 = document.createElement('h1');

// Se modifica el contenido del elemento
myH1.innerText = "Soy un titulo que se creo desde javascript";

// Se agrega al documento html
document.getElementById("titulo1").append(myH1);

// Se une la propiedad del json con el titulo de html
let textTitle1 = document.getElementById("titulo1").innerText
document.getElementById("titulo1").innerText = textTitle1 + " la " + my_hero_academia.squadName;

// for: los heroes, print nombres
// foreach

for (var position = 0; position < my_hero_academia.members.length; position++){
   let myh2 = document.createElement('h2');
   myh2.innerText = my_hero_academia.members[position].heroName;
   document.getElementById("hero_list").append(myh2);
}
