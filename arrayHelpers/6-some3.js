//Replicate first excercise of some with for

var products = [
  {name: "peach", type: "fruit", quantity: 0, price: 17},
  {name: "orange", type: "fruit", quantity: 30, price: 15},
  {name: "brocoli", type: "vegetable", quantity: 2, price: 20},
  {name: "papaya", type: "fruit", quantity: 1, price: 25},
  {name: "cheedar", type: "lact", quantity: 20, price: 50},
  {name: "gouda", type: "lact", quantity: 0, price: 90},
  {name: "peach", type: "fruit", quantity: 0, price: 17},
  {name: "orange", type: "fruit", quantity: 30, price: 15},
  {name: "brocoli", type: "vegetable", quantity: 2, price: 20},
  {name: "papaya", type: "fruit", quantity: 1, price: 25},
  {name: "cheedar", type: "lact", quantity: 20, price: 50},
  {name: "gouda", type: "lact", quantity: 0, price: 90}
]

const name = 'gouda'

console.log('some = ',
  products.some(product => product.name === name)
)


for (var i = 0; i <= products.length - 1; i++) {
  if(products[i].name === name){
    console.log('for = ', true)
    break
  }
  else if(products.length - 1 === i){
    console.log('for = ', false)
  }
}
