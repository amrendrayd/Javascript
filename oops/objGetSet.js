const User = {
    _email: 'aky@gmail.com',
    _password: "aky",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }

}

const user = Object.create(User)

console.log(user.email);
