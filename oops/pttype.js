let myName = "Amrendra"

console.log((myName.length));

let myChennal = "    Aky     "

console.log(myChennal.trueLength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.amrendra = function(){
    console.log(`Amrendra is present in all objects`);
    
}

Array.prototype.heyAmrendra = function(){
    console.log(`Amrendra says hello`);
    
}

heroPower.amrendra()

myHeros.amrendra()

// heroPower.heyAmrendra()


// inheritance

const Users = {
    name: "Ashish",
    email: "ashish@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TAsupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = Users

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUserName = "ChaiAurCode   "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
    
}

anotherUserName.trueLength()
"amrendra".trueLength()
"iceTea".trueLength()


function setUserName (username){
    // complex DB calls
    this.username = username
    console.log("called");
    
}

function createUsers(username, email, password){
    setUserName.call(this,username)
    
    this.email = email
    this.password = password
}

const chai = new createUsers("chai", "chai@gmail.com", "1234")
console.log(chai);

