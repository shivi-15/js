const balance = new Number(100)
console.log(balance)

console.log(balance.toFixed(2))
console.log(balance.toString().length)

const otherNumber = 123.234
console.log(otherNumber.toPrecision(4))

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))

// *********************Math***********************


console.log("Math methods")
console.log(Math);
console.log(Math.abs(-4));  // covert to positive
console.log(Math.round(4.8));  // round upto nearest value 
console.log(Math.ceil(6.3))  // ceil -- ceiling -- upper
console.log(Math.floor(6.3))  // floor -- down -- lower
console.log(Math.min(4,6,1,8))
console.log(Math.max(4,6,1,8))


// ******************************************


console.log("Random Numbers")

const random_number = Math.floor(Math.random() * 10) + 1  //between 1 to 10 
console.log(random_number)


// const randomNumber = Math.floor(Math.random() * (max-min + 1)) + min 


//betwee 21 to 30
const n = Math.floor(Math.random() * 10 ) + 21
console.log(n)






