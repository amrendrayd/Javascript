// fetch('http://google.com').then().catch().finally()

const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // Db calls, cryptography, network

    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
    
})

new Promise(function(resolve, reject) {
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
    
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "amrendra",email: "aky@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function(){
        let error = true
        // let error = false
        if(!error){
            resolve({username: "aky", password: "123"})
        }
        else {
            reject('ERROR: something went wrong')
        }
    },2000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username 
})
.then((username) => {
    console.log(username);  
})
.catch(function(error){
    console.log(error); 
})
.finally(()=>{
    console.log("The promise is either resolved or rejected");
})

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        // let error = false
        if(!error){
            resolve({username: "ashish", password: "1234"})
        }
        else {
            reject("ERROR: JS went wrong")
        }
    },1000)
})

// async await

async function consumePromiseFive() {
    try {
        const response = await promiseFive
    console.log(response);
    } catch (error) {
        console.log(error);
    }
    
}

consumePromiseFive()

async function getAllUsers() {
    try {
        const response = await fetch('http://api.github.com/users')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ",error);
    }
    
}

getAllUsers()

fetch('http://api.github.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
    
})
.catch((error) => {
    console.log(error);
})


