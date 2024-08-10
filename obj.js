// object is used in literal
// singalton ;- literal se banega to singaltan nahi hoga


// object litral

const mySym = Symbol("key1")

const JsUser = {
    name: "Amrendra",
    age: 23,
    location: "Delhi",
    email: "amrendra@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "Saturday"],
    [mySym]: "myKey1"
}

console.log(JsUser);

console.log(JsUser.name);

console.log(JsUser["email"]); //square notation

console.log(JsUser[mySym]);

JsUser.location= "Bihar";

// Object.freeze(JsUser)

JsUser.email = "Aky@gmail.com"

console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hi there!");
    
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js user ${this.name}`);
    
}

console.log(JsUser.greeting);
console.log(JsUser.greeting());

console.log(JsUser.greetingTwo());







