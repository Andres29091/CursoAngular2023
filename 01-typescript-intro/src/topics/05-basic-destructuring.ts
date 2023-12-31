
interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: 'Mess',
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}


const song = 'New Song';

// const { song: anotherSong, songDuration: duration, audioVolume: volume, details } = audioPlayer;
// const { author, year } = details;

// console.log('Song:', anotherSong);
// console.log('Duration:', duration);
// console.log('Volume:', volume);
// console.log('Author:', author);
// console.log('Year:', year);

const [,,trunks = 'Not Found']: string[] = ['Goku', 'Vegeta'];

console.log('Pesonaje 3', trunks);

export { }