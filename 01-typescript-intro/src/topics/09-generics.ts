



export function WhatsMyType<T>(argument: T): T {
    return argument;
}

const amIString = WhatsMyType<string>('Hola Mundo');
const amINumber = WhatsMyType<number>(100);
const amIArray = WhatsMyType<number[]>([1,2,3,4,5]);

console.log(amIString.split(' '));
console.log(amINumber.toFixed());
console.log(amIArray.join('-'));