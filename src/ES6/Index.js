//Multilinea

let fraseCompleta = `Esta es la primera frase
Ahora esta es la segunda frase
`

console.log(fraseCompleta);

let fraseCompleta2 = `Esta es la primera frase
Ahora esta es la segunda frase
Por ultimo esta es la tarcera Frase
`
console.log(fraseCompleta2);

// Destructuracion

let person = {
    name :'Oscar',
    age : 32 ,
    country : 'MX'
}

console.log(person.name, person.age);

let {name,age,country} = person;

console.log(name,country);

//Spread Operator

let equipo1=['Oscar', 'Julian', 'Ricardo'];
let equipo2=['Valeria', 'Yesica', 'Camila'];

let equipoNuevo = ['David', ...equipo1, ...equipo2];

console.log(equipoNuevo);

//Let y const

{
    var variableGlobal = 'Global var'
}

{
    let variableLocal = 'Local let'
    console.log(variableLocal);
}

{
    const variableConstant = 'Const'
    console.log(variableConstant);
}

