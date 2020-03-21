//Operador de reposo: Extrae las propiedades de un objeto que aun no se ha construido

const obj= {
    name: 'Diego',
    age: 26,
    country: 'MX'
};

let {name,...all}= obj;
console.log(name,all);
console.log(all);

//Propiedades de propagacion: une 2 o mas elementos de objetos en uno solo.


const obj= {
    name: 'Diego',
    age: 26,
};

const obj1= {
    last_name: 'Rojas'
}

const obj2={
    ...obj,...obj1,
    country: 'CO'
}

console.log(obj2);

//Promise.famally:Podemos saber cuando a terminado un llamado y cuando ejecutar una funcion o un codigo sea el caso.


const helloWord = () =>{
    return new Promise((resolve,reject) =>{
        (true)
        ? resolve('hello World')
        :reject(new Error('Test Error'))
    })
};

helloWord()
    .then(response => console.log(response))
    .catch(error=>console.log(error))
    .finally(()=>console.log('Finalizo'))

//-----------------------------------
const helloWord = () =>{
    return new Promise((resolve,reject) =>{
        (true)
        ? setTimeout(()=>resolve('hello World'),3000)
        :reject(new Error('Test Error'))
    })
};
    
helloWord()
    .then(response => console.log(response))
    .catch(error=>console.log(error))
    .finally(()=>console.log('Finalizo'))

//Mejoras en Refex: Se puede agrupar bloques en regex y como poder acceder a estos bloques

const regexData = /([0-9]{4})-([a-z]{4})-([0-9]{2})/

const match =regexData.exec('1993-sept-11');

const year= match[1]
const mount= match[2]
const day= match[3]

console.log(year,mount,day);
