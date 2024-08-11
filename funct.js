function add (a,b) {
    return a+b;
}

console.log(add(3,7));

function claculateCartPrice(...num1){
    return num1;
}

console.log(claculateCartPrice(500,300,600));

const user = {
    username: "Amrendra",
    price: 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

handleObject(user)


// Scopes
// var ias global scope but const and let are local  variable
//  

