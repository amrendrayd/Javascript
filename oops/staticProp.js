class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username : ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const aky = new User("aky")

// console.log(aky.createId());

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("ash", "i@gmail.com")

iphone.logMe();

// console.log(iphone.createId());


