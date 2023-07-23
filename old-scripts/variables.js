const x = 1;
console.log(x);
const x2 = x + 2;
console.log(x2, x);

var y = 'Hello My Friend!';
console.log(y);
y = 5;
console.log(y);

let z = 0;
console.log(z);
z = true;
console.log(z);

const obj = {};
console.log(obj);
obj.x = 1;
console.log(obj);
const lista = [];
console.log(lista);
lista.push(20);
console.log(lista);

const obj2 = {...obj, y:'potato'};
console.log(obj2);

const lista2 = [...lista, 'carrot'];
console.log(lista2);