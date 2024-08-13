const myObj = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

// for in loop

for (const key in myObj) {
    // console.log(key);
    console.log(myObj[key]);
}

const programming = ["j","d", "b"]

for (const key in programming) {
    console.log(key);
    
}

// for each

console.log("For Each Loop");

const coding = ["java", "js", "c++", "c", "Py"];

coding.forEach(element => {
    console.log(element);
    
});
