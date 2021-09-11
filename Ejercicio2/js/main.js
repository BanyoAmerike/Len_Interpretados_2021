let super_hero_squad = {
    "squadName":"Guardians of the Galaxy",
    "formed":2017,
    "active":true,
    "members":[
       {
          "heroName":"StarLord",
          "age":"Unknown",
          "lifePoints": 30,
          "basePower": 20,
          "defense": 20,
          "secretIdentity":"Peter Quill",
          "powers":[
             "Durability",
             "Longevity",
             "Strength"
          ]
       },
       {
          "heroName":"Gamora",
          "age":"Unknown",
          "lifePoints": 18,
          "basePower": 10,
          "defense": 10,
          "secretIdentity":"None",
          "powers":[
             "Agilty",
             "Martial Arts"
          ]
       },
       {          
          "heroName":"Draxx",
          "age":"Unknown",
          "lifePoints": 30,
          "basePower": 15,
          "defense": 15,
          "secretIdentity":"None",
          "powers":[
             "Super Strength",
           
          ]
       },
       {          
        "heroName":"Rocket Racoon",
        "age":"Unknown",
        "lifePoints": 10,
        "basePower": 30,
        "defense": 8,
        "secretIdentity":"Rocky",
        "powers":[
           "HperIntelligence",
                       
        ]
     },

     {          
        "heroName":"Groot",
        "age":"Unknown",
        "lifePoints": 40,
        "basePower": 30,
        "defense": 30,
        "secretIdentity":"Groot",
        "powers":[
           "Plant Growth",
                       
        ]
     }    
    ]
 }


// se crea un nuevo elemento en html
let myH1 = document.createElement('h1');

// se edita el contenido del nuevo elemento
//myH1.innerText = "soy un titulo creado desde javascript"

// se concatena el nuevo elemento a la pagina 
document.getElementById("titulo1").append(myH1);

// se introduce la propiedad del json al al titulo de html
let textTitle = document.getElementById("titulo1").innerText

document.getElementById("titulo1").innerText = textTitle + " " +
 super_hero_squad.squadName;

 console.log("antes del for");

for (let index = 0; index < super_hero_squad.members.length; index++) 
{
    console.log("inicia for");
    let superSquad1 = document.createElement('h2');
    console.log("Se crea h2");
    superSquad1.innerText = super_hero_squad.members[index].heroName;
    console.log("se edita superSquad1");
    document.body.append(superSquad1)
    console.log("Se concatena superSquad1");
    
}