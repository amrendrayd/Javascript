// ES6

class User {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername (){
        return `${this.username.toUpperCase()}`
    }
}


const user = new User("aky", "aky@gmail.com", "123")

console.log(user.encryptPassword());
console.log(user.changeUsername());

// behind the scene

function User2 (username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

User2.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User2.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const myUser = new User2("ashish", "ashish@gmaikl.com", "123")

console.log(myUser.encryptPassword());
console.log(myUser.changeUsername());




