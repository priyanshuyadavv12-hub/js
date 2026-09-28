let myDate = new Date()
// console.log(myDate.toString());

//gives universal time
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(typeof myDate);

//Madam u were born in an open free day Sunday 
let myCreatedDate = new Date(2004, 9, 10)
// console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

//current date 
// console.log(Date.now());

// console.log(Math.floor(Date.now()/1000));


let newDate = new Date ()
console.log(newDate.toDateString());

// `${newDate.getDay()} and the time is ${newTime.getTime()};`

newDate.tolocaleString('default', {
     weekday: "long",

})
//kuch error hai we'll seee afterrr 