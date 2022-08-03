//UNKNOWN TYPE 
// UNA MEJOR FORMA DE EVITAR ANY
let anyVar: any;

anyVar = 'Hola';
anyVar = 123;
anyVar = true;
anyVar = {};
anyVar = [];
anyVar = () => { };
anyVar = null;
anyVar = undefined;

let isNew: boolean = anyVar;

console.log(isNew);

let unknownVar: unknown;

unknownVar = 'Hola';
unknownVar = 123;
unknownVar = true;
unknownVar = [];
unknownVar = () => { };
unknownVar = null;
unknownVar = undefined;
unknownVar = {};

if (typeof unknownVar === 'string') {
    unknownVar.toUpperCase;
}

if (typeof unknownVar === 'boolean') {
    let isNew2: boolean = unknownVar;
}

const parse = (str: string): unknown => {
    return JSON.parse(str);
}
