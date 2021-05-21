console.log("I'm ready!");

// Iteration 1: Names and Input
let hacker1 = 'Luana';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Thiago';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
}

// Iteration 3: Loops

let driverUpper = '';

for (let i = 0; i < hacker1.length; i += 1){
    driverUpper += hacker1[i].toUpperCase();
    driverUpper += ' ';
}
console.log(driverUpper);

let navigator = '';

for (let i = hacker2.length - 1 ; i >= 0 ; i -= 1) {
    navigator += hacker2[i];
}
console.log(navigator);


