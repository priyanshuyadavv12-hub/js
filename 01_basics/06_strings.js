const name = "Priyanshu"
const repoCount = 25

// console.log(name +  repoCount);

console.log(`Hello my name is ${name} and my repo count is ${25}`)

const gameName = new String('Priyanshu')
// console.log(gameName[7]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('u'));

const newString = gameName.substring(0, 5)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

//without trim function 
const newStringOne = "  priyanshu    "
console.log(newStringOne);

//with trim function output dekh lena ek baar 
//starting place aur end place mein faltu ke space ko remove kar deta hai 

const newStringTwo = "   Priyanshu    "
console.log(newStringTwo.trim());

//.replace function 
const url ="https://priyanshu.com/priyanshu%20yadav"
console.log(url.replace('%20', '_'))

console.log(url.includes('Megha'))

//.split function
console.log(gameName.split('-'));
