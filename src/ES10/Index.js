//Flat= Devuelve una matrix con cualquier sub-matrix  aplanada
let array = [[1,2,3],[1,2,3,[1,2,3, [1,2,3]]]]

    console.log(array.flat()); //Obtiene la primera profundidad osea que retorna una matrix con los primeros elementos mas expuestos

    console.log(array.flat(2)); //Obtiene la segunda profunddad más expuesta osea que retorna una matrix con los primeros elementos mas expuestos y los elemetos de la sub-matris mas cercana

    console.log(array.flat(3)); //Obtiene la tercera profundidad más expuesta osea que retorna una matrix con los primeros elementos mas expuestos, los elemetos de la sub-matrix y los ultimos elementos de la sub-matrix mas interna

    console.log(array.flat(Infinity)); //Obtiene la profundidad más interna osea que retorna una matrix con los todos los elementos sin importar que tanprofundo sea

//FlatMap= mapea cada elemento, ejececuta una funcion y lo aplana

let array= [1,2,3,4,5]

    let array2=array.flatMap(value => [value, value * 2])

    console.log(array2);

//trim: Elimina los espacios en blanco de un string, por ello se utiliza dos comandos

    //Elimina los espacios en blanco que esten al comienzo del string
    let hello = '    Hello Word'
    console.log(hello)
    console.log(hello.trimStart());

    //Elimina los espacios en blanco que esten al final del string
    let hello = 'Hello Word       '
    console.log(hello);
    console.log(hello.trimEnd());

//try cath: Podemos pasar el parametro de error en catch

try{
}catch(error){

}

try{
}catch{
    error
}

// from.Entries= podemos pasar los elementos (llamadas entries o entradas) de un array para poder covertirlo en un objeto

let entradas = [['name','Oscar'],['age',32]]

console.log(Object.fromEntries(entradas))

// Symbol: es un objeto tipo simbol que permite acceder a una descrpcion

let mySymbl= 'Esta es la descripcion'

let symbol = Symbol(mySymbl)
console.log(symbol.description);

