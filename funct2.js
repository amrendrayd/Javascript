function one(){
    const username = "Amrendra"

    function two() {
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);

    two()
    
}

one()

// this keyword is used in current context

const user = {
    username: "Amrendra",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        
    }
}

user.welcomeMessage()

// browser ke andar global object hota hai vo windows object hota hai 

// IIFE :-- Immediately Invoked Function Expressions