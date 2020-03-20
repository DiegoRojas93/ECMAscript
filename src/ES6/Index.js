// clases

class calculator{
    constructor(){
        this.ValueA = 0;
        this.ValueB = 0;
    }

    sum(ValueA, ValueB){
        this.ValueA = ValueA;
        this.ValueB = ValueB;
        return this.ValueA + this.ValueB;
    }
}

const calc = new calculator()
console.log(calc.sum(2,2));

//Modulos

import {hello} from './module';

hello();

//Generadores 

function* helloWorld(){
    if(true){
        yield 'Hello';
    }
    if(true){
        yield 'World!';
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

        //Ejemplo 1

        function* fibonacci(){
            let index = 0;
            var value1 = 0;
            var value2 = 1;
            var resultado = 0;
            yield 0;
            while(index < 1){
                resultado = value1 + value2;
                value1 = value2;
                value2 = resultado; 
                yield resultado;
            }
        }
        const fibo = fibonacci();
        console.log(fibo.next().value);
        console.log(fibo.next().value);
        console.log(fibo.next().value);
        console.log(fibo.next().value);
        console.log(fibo.next().value);
        console.log(fibo.next().value);
        console.log(fibo.next().value);
        console.log(fibo.next().value);


        //Ejemplo 2

        function* anotherGenerator(i) {
            yield i + 1;
            yield i + 2;
            yield i + 3;
        }
  
        function* generator(i){
            yield i;
            yield* anotherGenerator(i);
            yield i + 10;
        }
  
        var gen = generator(10);
  
        console.log(gen.next().value); // 10
        console.log(gen.next().value); // 11
        console.log(gen.next().value); // 12
        console.log(gen.next().value); // 13
        console.log(gen.next().value); // 20


        //Ejemplo 3

        
        function* generatorFunction(){
            console.log('La ejecucion esta comenzando');
      
            yield 'Primer valor';

            console.log('La ejecucion esta reiniciando');

            yield 'Fin de la funcion'
      
        }

        let dev = {};
        const gen = generatorFunction();

        dev = gen.next();
        console.log(dev);
        dev = gen.next();
        console.log(dev);
        dev = gen.next();
        console.log(dev);
  