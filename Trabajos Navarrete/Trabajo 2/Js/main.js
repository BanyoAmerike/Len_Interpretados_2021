let Marvel = {
    "squadName":"Avengers",
    "homeTown":"Metro City",
    "formed":2016,
    "secretBase":"Avengers Tower",
    "active":true,
    "members":[
       {
          "heroName":"Iron Man",
          "age":50,
          "lifePoints": 30,
          "basePower": 100,
          "defense": 20,
          "secretIdentity":"Tony Stark",
          "powers":[
             "Super force",
             "Fly",
             "Energy blast"
          ]
       },
       {
          "heroName":"Captain America",
          "age":80,
          "lifePoints": 80,
          "basePower": 200,
          "defense": 50,
          "secretIdentity":"Steve Rogers",
          "powers":[
             "Super Force",
             "Super Velocity"
          ]
       },
       {          
          "heroName":"Doctor Strange",
          "age":40,
          "lifePoints": 50,
          "basePower": 10000,
          "defense": 10,
          "secretIdentity":"Steven Strange",
          "powers":[
             "Magic powers",
             "Time control"
          ]
       },
       {          
         "heroName":"Hulk",
         "age":50,
         "lifePoints": 100000,
         "basePower": 100,
         "defense": 10000,
         "secretIdentity":"Bruce Baner",
         "powers":[
            "Inmunity",
            "Super strong",
            "Super Jump"
         ]
      },
      {          
         "heroName":"Ant Man",
         "age":35,
         "lifePoints": 100,
         "basePower": 20,
         "defense": 100,
         "secretIdentity":"Scott",
         "powers":[
            "Gigant and mini transformation",
            "Super strong",
            "Ant comunication"
         ]
      }
       
    ]
 }

console.log(Marvel.members[2].heroName);

//se crea un nuevo elemneto (objeto html)
let myH1 = document.createElement('h1');
let myH2 = document.createElement('h1');
let myH3 = document.createElement('h1');
let myH4 = document.createElement('h1');
let myH5 = document.createElement('h1');

for (var i = 0; i < 6; i++)
{
   if(i < 1)
   {
      myH1.innerText = Marvel.members[i].heroName;
   }
   if(i < 2)
   {
      myH2.innerText = Marvel.members[i].heroName;
   }
   if(i < 3)
   {
      myH3.innerText = Marvel.members[i].heroName;
   }
   if(i < 4)
   {
      myH4.innerText = Marvel.members[i].heroName;
   }
   if(i < 5)
   {
      myH5.innerText = Marvel.members[i].heroName;
   }
}
//Se modifica el contenido del eleemento 


//Se agrega al documento html
document.body.append(myH1);
document.body.append(myH2);
document.body.append(myH3);
document.body.append(myH4);
document.body.append(myH5);

// Se une la propiedad del json con el titulo html
let texTitle1 = document.getElementById("titulo1").innerText
document.getElementById("titulo1").innerText = texTitle1 + " los " + Marvel.squadName;

console.log(myH1);