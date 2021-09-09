let Watchmen = {
    "squadName":"Watchmen",
    "City":"NY",
    "formed":1980,
    "active":false,
    "members":[
       {
          "heroName":"Dr. Manhattan",
          "age":45,
          "lifePoints": 30000,
          "basePower": 20000,
          "defense": 2000000,
          "secretIdentity":"Dr. Jonathan Jon Osterman",
          "powers":[
             "Control absoluto de la materia",
             "manipulación del tiempo y del espacio,",
             "excepcional nivel de inteligencia "
          ]
       },
       {
          "heroName":"TheComedian",
          "age":50,
          "lifePoints": 30,
          "basePower": 100,
          "defense": 40,
          "secretIdentity":"Eddie Blake",
          "powers":[
             "Fuerza",
             "Martial Arts"
          ]
       },
       {          
          "heroName":"Búho Nocturno",
          "age":32,
          "lifePoints": 30,
          "basePower": 15,
          "defense": 15,
          "secretIdentity":"Dan Dreiberg",
          "powers":[
             "Super Fuerza",
                         
          ]
       },
       {          
        "heroName":"Rorschach",
        "age":38,
        "lifePoints": 30,
        "basePower": 30,
        "defense": 20,
        "secretIdentity":"Walter Joseph Kovacs",
        "powers":[
           "Fuerza",
           "Inteligencia"             
        ]
     }
    ]
 }
 //se crea un nuevo elemneto (objeto html)
let myH1 = document.createElement('h1');
let myH2 = document.createElement('h1');
let myH3 = document.createElement('h1');
let myH4 = document.createElement('h1');
let myH5 = document.createElement('h1');

 console.log(Watchmen,members[2].heroName);
 for (var i = 0; i < 6; i++)
{
   if(i < 1)
   {
      myH1.innerText = Watchmen.members[i].heroName;
   }
   if(i < 2)
   {
      myH2.innerText = Watchmen.members[i].heroName;
   }
   if(i < 3)
   {
      myH3.innerText = Watchmen.members[i].heroName;
   }
   if(i < 4)
   {
      myH4.innerText = Watchmen.members[i].heroName;
   }
   if(i < 5)
   {
      myH5.innerText = Watchmen.members[i].heroName;
   }
}


// Se modifica el contenido del elemento
myH1.innerText = "Soy un titulo que se creo desde javascript";

// Se agrega al documento html
document.body.append(myH1);
document.body.append(myH2);
document.body.append(myH3);
document.body.append(myH4);
document.body.append(myH5);

// Se une la propiedad del json con el titulo de html
let textTitle1 = document.getElementById("titulo1").innerText
document.getElementById("titulo1").innerText = textTitle1 + " la " + Watchmen.squadName;

// for: los heroes, print nombres
// foreach


console.log(myH1);