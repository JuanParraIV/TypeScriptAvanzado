export function parseStr(input: string): string[];

export function parseStr(input: string[]): string;

export function parseStr(input: number): boolean;


export function parseStr(input: unknown): unknown {

  if (Array.isArray(input)) { return input.join('') };//string[] => string

  if (typeof input === 'string') { return input.split('') }; //string => string[]

  if (typeof input === 'number') { return true }; //number => boolean
}

const resArray = parseStr('JUAN');
resArray.reverse();

const resString = parseStr(['J', 'U', 'A', 'N'])
resString.toLowerCase()

const resBoolean = parseStr(12);

console.log(resArray)
console.log(resString)
console.log(resBoolean)
