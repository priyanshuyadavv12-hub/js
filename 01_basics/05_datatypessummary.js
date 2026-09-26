//datatypes summary
/** primite datatypes these are call by value 
 1.string 2.Number 3.Boolean 4.Null 5.Undefined 6.Symbol 7.BigInt


 //Non Primitive datatype these are direct memory allocation 

1.Array 
2.Objects
3.Functions
 */

//primitive datatypes
  const score= 100
  const scoreValue=100.2

  const isLoggedIn= false
  const outsideTemp=null
  let userEmail=undefined;
  const id = Symbol('123')
  const anotherId=Symbol('123')
  console.log( id=== anotherId);


  const hero=("shaktiman", "nagraj", "Ironman")
  let myObj = {
        name:"priyanshu",
        age: 22,
  }
  // console.log(typeof "myobj")

  // const myfunction= function(){
  // console.log("Hello world")
  // }
  console.log(typeof hero)