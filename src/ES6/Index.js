function newFunction(name,age,country){
    var name=name || 'Oscar';
    var age = age || 32;
    var country = country || 'CO';
    console.log(name,age,country);
}

// EC6

 function newFunction2(name='Oscar',age=32,country='CO'){
    console.log(name,age,country);
 };

 newFunction2();
 newFunction2('Ricardo', '23', 'MX');

 let hello = 'Hello'
 let world = 'Word'

 let epicPhrase = hello + ' ' + world;
 console.log(epicPhrase);
 
 let epicPhrase2 = `${hello} ${world}`;
 console.log(epicPhrase2);