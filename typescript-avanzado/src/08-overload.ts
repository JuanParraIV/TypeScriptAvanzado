// Sobrecarga de funciones ayudando a Typescript en las funciones
// JUAN => [J,U,A,N] => string => string[]
// [J,U,A,N] => string[] => string

function parseStr(input:string | string[]) : string | string[] {
   return Array.isArray(input) ?
    input.join('') : //string[] => string
    input.split(''); //string => string[]


}

const resArray = parseStr('JUAN');

if (Array.isArray(resArray)) {
  resArray.reverse();
}

const resString = parseStr(['J','U','A','N'])

if (typeof resString === 'string') {
 resString.toLowerCase()
}

console.log(resString)
console.log(resArray)
console.log(parseStr(['J','U','A','N']))
console.log(parseStr('JUAN'))
