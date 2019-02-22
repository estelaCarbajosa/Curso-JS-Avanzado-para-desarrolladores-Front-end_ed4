//1
var tren = 0
while (tren < 9) {
    tren ++;
    if (tren < 4) {
        console.log("El tren número " + tren + " esta funcionando")
    } else {
        console.log("El tren número " + tren + " no esta funcionando")
    }
}

//2
var tren = 0
do {
    console.log("El tren número " + tren + " esta funcionando");
    tren ++;
} while(tren < 3)
do {
    console.log("El tren número " + tren + " no esta funcionando");
    tren ++;
}while(tren < 9)

//3
for (var i = 0; i < 9; i++) {
    if (i < 3){  console.log(("El tren número " + i + " esta funcionando"));}else {
        console.log("El tren número " + i + " no esta funcionando");
    }
}

//4
for (var i = 0; i < 11; i++) {
  if (i === 10) {
       console.log("Tren número " + i + " nocturno")
     }
  else if (i < 3) {
        console.log(("El tren número " + i + " esta funcionando"));
    } else {
        console.log(("El tren número " + i + " no esta funcionando"));

    }
}

//5


//6
for (var i = 1; i < 13; i++) {
    if (i === 10 || i === 12) {
        console.log("Tren número " + i + " nocturno")
    }
    else if (i < 4) {
        console.log(("El tren número " + i + " esta funcionando"));
    }
    else if (i === 11 || i === 9) {
continue;}else {
        console.log(("El tren número " + i + " no esta funcionando"));
    }
}

//7
var ahora = new Date();
var isSaturday= ahora.getDay();
for (var i = 1; i < 14; i++) {
    if (i === 10 || i === 12) {
        console.log("Tren número " + i + " nocturno")
    }
    else if (i < 4) {
        console.log("El tren número " + i + " esta funcionando");
    }
    else if (isSaturday === 4 && i === 13){
        console.log("El tren número " + i + " es el tren de la fiesta");
    }
    else if (i === 11 || i === 9) {
        continue;}else {
        console.log("El tren número " + i + " no esta funcionando");
    }

}

//8
let passengers = [
    "Alicia Gutierrez",
    "Alfonso Gomez",
    "Luis Navarro",
    "Oscar Garcia",
    "Andres Fernandez",
    "Lucia Mellado"
]
 passengers.map((item, index) => console.log((index+1) + item));

//9
//create
let passengers = [
    "Alicia Gutierrez",
    "Alfonso Gomez",
    "Luis Navarro",
    "Oscar Garcia",
    "Andres Fernandez",
    "Lucia Mellado"
];
let newPassenger = ["nombre random", "max power"];

function createPassengers(list, newPassenger) {
    return list.concat(newPassenger);
}

passengers = createPassengers(passengers, newPassenger);


//delete
passengersToDelete = ["Luis Navarro", "Oscar Garcia"];

function deletePassengers(list, passengersToDelete) {
    var newList = list.filter(item => !passengersToDelete.includes(item))
    return newList;
};

passengers = deletePassengers(passengers, passengersToDelete);

//11
let passengersGlobal = [
    "Alicia Gutierrez",
    "Alfonso Gomez",
    "Luis Navarro",
    "Oscar Garcia",
    "Andres Fernandez",
    "Lucia Mellado"
];
var billete;

function createPass() {

    function nivel2() {
        var infoInterna = [" Tetuán (12)",  "Moncloa (19)", "Hortaleza (21)"];

        return PassengerCards = passengersGlobal.map(item => item.concat(infoInterna));
    }

    billete = nivel2;

}

createPass();

billete();
console.log("Burbuja recuerda su contexto original"

