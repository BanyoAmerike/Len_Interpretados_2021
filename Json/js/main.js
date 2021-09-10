let Banyotasticos = {
    "squadName": "Banyotasticos",
    "City": "CDMX",
    "formed": 2021,
    "active": false,
    "members": [
        {
            "heroName": "Banyo",
            "age": 00,
            "lifePoints": 300,
            "basePower": 200,
            "defense": 200,
            "secretIdentity": "Profe Banyo",
            "powers": [
                "Conocimiento total de la programación",
                "Manipulación a placer de versiones de GIT",
                "Es chido sin ser barco"
            ]
        },
        {
            "heroName": "Aviles con Z",
            "age": 22,
            "lifePoints": 100,
            "basePower": 100,
            "defense": 50,
            "secretIdentity": "Aviles",
            "powers": [
                "Es terco y termina las cosas",
                "El jefe de grupo"
            ]
        },
        {
            "heroName": "DinoDiana",
            "age": 20,
            "lifePoints": 80,
            "basePower": 120,
            "defense": 80,
            "secretIdentity": "Dianita",
            "powers": [
                "Tener colera",
                "Tener salmonela"

            ]
        },
        {
            "heroName": "Compacto",
            "age": 24,
            "lifePoints": 120,
            "basePower": 50,
            "defense": 75,
            "secretIdentity": "Ray",
            "powers": [
                "Interesante",
                "Tener la mano lesionada pero seguir jugando chido"
            ]
        }
    ]
}

let myH1 = document.createElement('h1');
let myH2 = document.createElement('h1');
let myH3 = document.createElement('h1');
let myH4 = document.createElement('h1');
let myH5 = document.createElement('h1');

console.log(Banyotasticos.members[2].heroName);
for (var i = 0; i < 6; i++) {
    if (i < 1) {
        myH1.innerText = Banyotasticos.members[i].heroName;
    }
    if (i < 2) {
        myH2.innerText = Banyotasticos.members[i].heroName;
    }
    if (i < 3) {
        myH3.innerText = Banyotasticos.members[i].heroName;
    }
    if (i < 4) {
        myH4.innerText = Banyotasticos.members[i].heroName;
    }
}

//myH1.innerText = "Soy un titulo que se creo desde javascript";

document.body.append(myH1);
document.body.append(myH2);
document.body.append(myH3);
document.body.append(myH4);

let textTitle1 = document.getElementById("titulo1").innerText
document.getElementById("titulo1").innerText = textTitle1 + " " + Banyotasticos.squadName;

console.log(myH1);