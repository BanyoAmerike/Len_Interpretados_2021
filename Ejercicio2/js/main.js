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
      }
   ]
}

//console.log(my_hero_academia.members[2].lifePoints);

/*let myH1 = document.createElement('h1');
//myH1.innerText = "Soy un titlo de javascript";
document.body.append(myH1);
*/

let textLine = document.getElementById("titulo1").innerText;
document.getElementById("titulo1").innerText = textLine + ' : ' + my_hero_academia.squadName;

let textLine2 = document.getElementById("titulo2").innerText;
document.getElementById("titulo2").innerText = textLine2 + ' ' + my_hero_academia.homeTown;

let textLine3 = document.getElementById("titulo3").innerText;
document.getElementById("titulo3").innerText = textLine3 + ' ' + my_hero_academia.formed;

let textLine4 = document.getElementById("titulo4").innerText;
document.getElementById("titulo4").innerText = textLine4 + ' ' + my_hero_academia.secretBase;

let textLine5 = document.getElementById("titulo5").innerText;
document.getElementById("titulo5").innerText = textLine5 + ' ' + my_hero_academia.active;

for(var posArray = 0; posArray < my_hero_academia.members.length; posArray++)
{
   //console.log("inicia for");
   let name = document.createElement('p');
   let p2 = document.createElement('p');
   let p3 = document.createElement('p');

   name.innerText = "->" + my_hero_academia.members[posArray].name;
   p2.innerText = "Información: " + "<Edad: " + my_hero_academia.members[posArray].age + ">" + "<Num. vida: " + my_hero_academia.members[posArray].lifePoints + ">" + "<Poder base: " + my_hero_academia.members[posArray].basePower + ">"
   + "<Defensa: " + my_hero_academia.members[posArray].defense + ">" + "<Indentidad Secreta: " + my_hero_academia.members[posArray].secretIdentity + ">";
   p3.innerText="  Poderes: " + my_hero_academia.members[posArray].powers;
   
   document.body.append(name);
   document.body.append(p2);
   document.body.append(p3);
}

console.log("Con Foreach");
my_hero_academia.members.forEach(element =>console.log(element));

