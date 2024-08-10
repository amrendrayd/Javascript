// Dates and Time in Javascript

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0 ,23); //months start in js from 0
console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

// convert second
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);













