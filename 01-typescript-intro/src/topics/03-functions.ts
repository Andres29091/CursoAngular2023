

function addNumbers(a: number, b: number): number {
    return a + b;
}

const addNumbersArrow = (a: number, b: number): string => {
    return `${a + b}`;
}

function multiply(firsNumber: number, secondNumber?: number, base: number = 2) {
    return firsNumber * base;
}

/* const result: number = addNumbers(1, 2);
const result2: string = addNumbersArrow(3, 2);
const multiplyResult: number = multiply(5);

console.log({ result });
console.log({ result2 });
console.log({ multiplyResult }); */


interface Character {
    name:string;
    hp: number;
    showHp: () => void
}

const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
}

const dark: Character = {
    name: 'Dark',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`);
    },
}

healCharacter(dark,10);

dark.showHp();

export { };