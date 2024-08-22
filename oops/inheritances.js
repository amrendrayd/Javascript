class User {
    constructor(username){
        this.username = username
    }

    logME(){
        console.log(`USername is ${this.username}`);
        
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`New course are added by ${this.username}`);
        
    }
}

const user = new Teacher("Ashish", "ashish@gamil.com", "123")

user.addCourse()

const topUSer = new User("aky")

topUSer.logME()

console.log(user === topUSer);

console.log(user instanceof Teacher);

console.log(user instanceof User);


