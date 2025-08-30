/*Data Types :

Primitive or Non-reference (Call by value)
7 types : String , Number , Boolean , null , undefined  , Symbol 

Non-Primitive or Reference 
Array , Object , Function 

*/

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id)
console.log(id === anotherId )        //false

const bigNumber = 87302870420n           

const heros = ["Saktiman" , "Naagraj"]    // array
 
let my_obj = {                       // object
    name : "Shivi" ,
    age :  22 
}

const myFunction = function(){         // function
    console.log("Hello World")
}
myFunction()