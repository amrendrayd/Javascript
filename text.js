console.log("Amrendra");

const userName = new String("amrendrayd");

console.log(userName);
console.log(userName.length);
console.log(userName.toUpperCase());
console.log(userName[0]);
console.log(userName.charAt(2));
console.log(userName.indexOf('d'));

const newUserName = userName.substring(0,5);
console.log(newUserName);

const anotherUser = userName.slice(0,4);
console.log(anotherUser);

const user = "  aky  ";
console.log(user);
console.log(user.trim());


const url  ="http://amrendra.com/amrendra%20yd"
console.log(url.replace('%20', '_'));
console.log(url.includes('yd'));















