const marvalHeros = ["thor", "Ironman", "spiderman"];

const dcHeros = ["superHero", "flash", "batman"];

// marvalHeros.push(dcHeros);

// console.log(marvalHeros);

const allHeros = marvalHeros.concat(dcHeros);

console.log(allHeros);


// Spread 
const allNewHeros = [...marvalHeros, ...dcHeros];
console.log(allNewHeros);

const arr = [1,2,3,[4,5,6],7, [6,7,[4,5]]]

const arr2 = arr.flat(Infinity)
console.log(arr2);


console.log(Array.isArray("Amrendra"));

console.log(Array.from("Amrendra"));

console.log(Array.from({name: "Amrendra"})); //interesting

let a = 100;
let b = 200;
let c = 300;

console.log(Array.of(a,b,c));




