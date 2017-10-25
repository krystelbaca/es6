// using filter we should be able to get those products that comply with the
// next conditionstype :
// type is 'lact', quantity is bigger than '0', price is no bigger thatn budget

var products = [
  {name: "peach", type: "fruit", quantity: 0, price: 17},
  {name: "orange", type: "fruit", quantity: 30, price: 15},
  {name: "brocoli", type: "vegetable", quantity: 2, price: 20},
  {name: "papaya", type: "fruit", quantity: 1, price: 25},
  {name: "cheedar", type: "lact", quantity: 20, price: 50},
  {name: "gouda", type: "lact", quantity: 0, price: 90}
]

var filterProducts = []
var budget = 100

for (var i = 0; i < products.length; i++) {
  if (products[i].type === 'lact' && products[i].quantity > 0 && products[i].price < budget) {
    filterProducts.push(products[i])
  }
}

console.log(filterProducts)
