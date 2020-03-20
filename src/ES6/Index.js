// Parámetros en objetos

let name = 'Oscar';
let age = 32;

    //EC5
    let obj1 = { name: name, age: age };

    //EC6
    let obj2 = { name, age };

console.log(obj2);


//Arrow Functions
const names = [
    {name: 'Diego', age: 26}
    {name: 'Oscar', age: 32}
]

    //EC5
    let listOfNames = names.map(function(item){
        console.log(item.name);
        })

    //EC6
    let listOfNames2 = names.map(item=>console.log(item.name))

    let listOfNames3 = (name, age, country)=>{
        ...
    }

    let listOfNames4 = name=>{
        ...
    }

    const square = num => num * num;


//Promesas

const promesa = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Hey!')
        }else{
            reject('Ups!!');
        }
    });
}

promesa()
    .then(response => console.log(response))
    .then(() => console.log('Hola'))
    .catch(error => console.log(error))