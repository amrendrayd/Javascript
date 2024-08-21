//  javascript and classes

// OOp :- it is a programming technique.

// object :- collection of properties and methods

// why use oops ?
//  :-- parts of oops

// object literal

// constructor function
// ptototype
// classes
//  Instences (new , this keywords)

// four keywords or pillers
// Abstraction :- hide internal details
// encapsulation :- raper
// polymorphism :- one methode can works many works


// -----object letral--------
const user = {
    username: "amrendra",
    loginCount: 8,
    signedIn: true,

    getUSerDetails: function() {
        console.log("Get user detail from database");
        console.log(`${this.username}`);
        console.log(this);
        
    }
}

console.log(user.username);
console.log(user.getUSerDetails());
console.log(this);

// ---- constructor -----
// const promiseOne = new Promise()

function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this
}

const userOne = new User("Amrendra", 12, true)

const userTwo = new User("ashish", 13, true)

console.log(userOne);
console.log(userTwo);
console.log(userOne.constructor);




