const score = 400
// console.log(score);

//creates a number object containing 100
const balance = new Number(100)
// console.log(balance);

//shows the length of the string
// console.log(balance.toString().length);

// shows the fixed value number of data after the value 
// console.log(balance.toFixed(3));


//to precsion ek average value dene ke liye   
const otherNumber = 123.688

// console.log(otherNumber.toPrecision(3));

//.toLocaleString ka use apni hissab ki currecny understanding 
// ke liye use hota hai 

// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-In'));

// @@@@@@@@@@@@@@@ Maths @@@@@@@@@@@@@@@@@//

  console.log(Math);
  //changes negative to positive(.abs)
  console.log(Math.abs(-7));

  //round of matlab wahi average 5 se jyada bada number nai toh 
  //chota 
  console.log(Math.round(4.6));

  //.ceil ka matlab bada number hi lega top wali value dega
  console.log(Math.ceil(4.2));

    //floor wali values dega s
   console.log(Math.floor(4.3));

   //.min and max

//    console.log(Math.min(2, 4, 5 ));
//    console.log(Math.Max(2, 3, 4 ));

   console.log(Math.random());
   console.log((Math.random()*10)+1);
   console.log((Math.random()*10)+1);

   const min = 10 
   const max = 20

   Math.random()