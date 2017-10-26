// Iterate an array of numbers and return the sum of this numbers
//
// create an array of numbers
// create a variable to hold the sum
// loop over the array, incrementing the sum variable
// print the sum variable

const numbers = [1,2,3,4,5]

var sumFor = 0
for (var i = 0; i < numbers.length; i++){
   sumFor = sumFor + numbers[i]
}
console.log ('for', sumFor)

sum = 0
var resultForEach = numbers.forEach(function(number){
  this.sum = this.sum + number
})
//forEach returns undefined
console.log('forEach', sum)

//Easier with reduce
reduceNumbers = numbers.reduce((previous, current) => previous + current)
console.log('reduce', reduceNumbers)