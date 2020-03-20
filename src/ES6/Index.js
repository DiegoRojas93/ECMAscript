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

