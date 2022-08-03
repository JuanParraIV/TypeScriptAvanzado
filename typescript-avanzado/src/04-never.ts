//Funciones que nunca terminan 
const withOutEnd = () => {
    while (true) {
        console.log('Hacia el infinito y mas allá')
    }
};

const fail = (message: string) => {
    throw new Error(`Este es el error ${message}`);

};

const example = (input: unknown) =>
    (typeof input === 'string') ?
        `El Input ${input} es un ${typeof (input)}` :
        Array.isArray(input) ?
         `El Input ${input} es un ${typeof (input)}` :
         fail('Not Matches');



console.log(example('Hola'))
console.log(example([]))
console.log(example(156987))
console.log(example('Hola'))
