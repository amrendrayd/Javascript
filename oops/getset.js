class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        // return this._password.toUpperCase()
        return `${this._password}aky`
    }

    set password(value){
        this._password = value.toUpperCase()
    }
}

const aky = new User("aky@gmail.com", "abc")

console.log(aky.password);
console.log(aky.email);

