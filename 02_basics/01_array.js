//array

const myArr = [0, 1, 2, 3, 4, 5, 6]
const myHeros = ["Ironman", "hulk", "thor"]
const myArr2 =("")
console.log(myArr[6]);
console.log(myHeros[2]);

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// console.log(myArr);
// adds one value at the starting of the array
// myArr.unshift(9)

// // removes one value at the starting of the array 
// myArr.shift()
// console.log(myArr);


//slice and splice
console.log("A", myArr);
const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3)
console.log(myn1);
console.log(myn2);