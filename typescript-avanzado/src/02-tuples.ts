const prices:(string |number)[]= [1,2,3,4,5,'Prueba'];
prices.push(1);
prices.push('Prueba2');
console.log(prices);

let user : [string, number];

user = ['Nico', 123];
user = [ 'Juan', 456, 'Admin'];
console.log(user);

const [,a,b] = user;

console.log(a);
console.log(b);


