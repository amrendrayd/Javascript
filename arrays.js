// Arrays

const arr = [1,2,3,4,5,6];

for(let i =0; i<arr.length; i++){
    console.log(arr[i]);
}

// console.log(arr[3]);

const arr2 = new Array(2,4,6,8,10);

for(let i =0; i<arr2.length; i++){
    console.log(arr2[i]);
    
}

arr2.push(12);
console.log(arr2);

arr2.pop()
console.log(arr2);

arr2.unshift(0) //added in start in array
console.log(arr2);

arr2.shift(); //remove value from start
console.log(arr2);

console.log(arr2.includes(6)); //true amd false

console.log(arr2.indexOf(6));

const newArr = arr2.join()
console.log(arr2);
console.log(newArr);
console.log(typeof newArr);

// slice and splice

console.log("A", arr2);

console.log(arr2.slice(2,4));

console.log(arr2.splice(2,4)); //manuplate original array


