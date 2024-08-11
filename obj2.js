// const user = new Object()

const users = {}

users.id = "1214sd";
users.name = "Amtrendra";
users.isLoggedIn = false;

console.log(users);

const regularUser = {
    email: "aky@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Amrendra",
            lastName: "Yadav"
        }
    }

}

console.log(regularUser);
console.log(regularUser.fullName);
console.log(regularUser.fullName.userFullName);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

// const obj3 = {
//     obj1, 
//     obj2
// }

// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
console.log(obj3);

const dbUser = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    }
]

console.log(Object.keys(users));
console.log(Object.values(users));
console.log(Object.entries(users));

console.log(users.hasOwnProperty('isLoggedI'));












