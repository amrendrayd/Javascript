// for of loop

const arr = [1,2,3,4,5];

for (const value of arr) {
    console.log(value);
    
}

const greeting = "Hello world"

for(const greet of greeting){
    console.log(greet);
    
}

// Maps :- it holds key value pair and it store unique value

const map = new Map()

map.set('IN', "India")
map.set('USA', "United State Of America")

console.log(map);

for (const [key, value] of map) {
    console.log(key, value);
    
}

const myObj = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

// for (const [key, value] of myObj) {
//     console.log();
    
// }
