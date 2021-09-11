let my_hero_academia = {
    "squadName":"Super hero squad",
    "homeTown":"Metro City",
    "formed":2016,
    "secretBase":"Super tower",
    "active":true,
    "members":[
       {
          "name":"Molecule Man",
          "age":29,
          "lifePoints": 30,
          "basePower": 10,
          "defense": 1,
          "secretIdentity":"Dan Jukes",
          "powers":[
             "Radiation resistance",
             "Turning tiny",
             "Radiation blast"
          ]
       },
       {
          "name":"Madame Uppercut",
          "age":39,
          "lifePoints": 90,
          "basePower": 2,
          "defense": 10,
          "secretIdentity":"Jane Wilson",
          "powers":[
             "Million tonne punch",
             "Damage resistance",
             "Superhuman reflexes"
          ]
       },
       {          
          "name":"Eternal Flame",
          "age":1000000,
          "lifePoints": 20,
          "basePower": 10,
          "defense": 1,
          "secretIdentity":"Unknown",
          "powers":[
             "Immortality",
             "Heat Immunity",
             "Inferno",
             "Teleportation",
             "Interdimensional travel"
          ]
       },
       {
           "name": "See&Use",
           "age" : 57,
           "LifePoints" : 0,
           "basePower" : 0,
           "defense" : 1,
           "sectetIdentity" : "Unknown",
           "Powers" :[
               "Mejoras craneales",
               "Vista telescopica",
               "Vista microscopica",
               "Control celular"
           ] 
        },
        {
            "name": "PilarMan",
           "age" : 20,
           "LifePoints" : 200,
           "basePower" : 500,
           "defense" : 200,
           "sectetIdentity" : "Marco Martinez",
           "Powers" :[
               "Super Fuerza",
               "Super velocidad"
           ] 
        },
        {
            "name": "Sand_Clock",
           "age" : 18,
           "LifePoints" : 20,
           "basePower" :300,
           "defense" : 10,
           "sectetIdentity" : "Ramon Ramos",
           "Powers" :[
               "Slow Time",
               "Reflejos sobrehumanos",
           ] 
        },
        {
            "name": "Gold Kight",
           "age" : 69,
           "LifePoints" : 50,
           "basePower" : 700,
           "defense" : 300,
           "sectetIdentity" : "Cosme Fulanito",
           "Powers" :[
               "Super fuerza",
               "Lanza de justica",
               "Luz de inspiracion"
           ] 
        },
        {
            "name": "Dead Gastrict",
           "age" : "???",
           "LifePoints" : 30,
           "basePower" :250,
           "defense" : 30,
           "sectetIdentity" : "Juan Pedro Gomex",
           "Powers" :[
               "Salsas Super picante",
               "Grasa destroza estomagos",
               "Resistancia a venenos, virus y vacterias"
           ] 
        }
       
    ]
 }


//Se crea un nuevo elemento (Objeto html)
let myH1 = document.createElement('h1');

//Se modifica el contenido del elemnto
myH1.innerText = "Lista oficial de heroes";

// Se agrega al documento
document.getElementById("titulo1").append(myH1);


let textTitle1 = document.getElementById("titulo1").innerText;
for (var position = 0; position < my_hero_academia.members.length; position++){
   let myh2 = document.createElement('h2');
   myh2.innerText = my_hero_academia.members[position].name;
   document.getElementById("my_hero_list").append(myh2);
}
