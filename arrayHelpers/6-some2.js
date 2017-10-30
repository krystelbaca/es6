//Make a function with some that returns if there is 
// the given type in the array 
var products = [
  {name: "peach", type: "fruit", quantity: 0, price: 17},
  {name: "orange", type: "fruit", quantity: 30, price: 15},
  {name: "brocoli", type: "vegetable", quantity: 2, price: 20},
  {name: "papaya", type: "fruit", quantity: 1, price: 25},
  {name: "cheedar", type: "lact", quantity: 20, price: 50},
  {name: "gouda", type: "lact", quantity: 0, price: 90}
]

function isType(array,type) {
  return (array.some(arg => arg.type === type))
}

console.log(isType(products,'meat'))