//Make a function for some that verify if there's a 
// vegetable on the array and other for meat
var products = [
  {name: "peach", type: "fruit", quantity: 0, price: 17},
  {name: "orange", type: "fruit", quantity: 30, price: 15},
  {name: "brocoli", type: "vegetable", quantity: 2, price: 20},
  {name: "papaya", type: "fruit", quantity: 1, price: 25},
  {name: "cheedar", type: "lact", quantity: 20, price: 50},
  {name: "gouda", type: "lact", quantity: 0, price: 90}
]

function isVeggie(argument) {
  return argument.type === 'vegetable'
}

function isMeat(argument) {
  return argument.type === 'meat'
}

console.log(
  products.some(isVeggie),
  products.some(isMeat)
)