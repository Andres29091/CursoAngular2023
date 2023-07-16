const skills: string[] = ['Bash','Counter','Healing'];

interface Character {
    name:string;
    hp:number;
    skills: string[];
    homeTown?: string;
}

const dark: Character = {
    name: 'Dark',
    hp: 100,
    skills: ['Bash', 'Counter'],
}

dark.homeTown = 'Mordor';

console.table(dark);




export {};