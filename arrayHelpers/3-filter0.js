var products = [
  {name: "peach", type: "fruit"},
  {name: "orange", type: "fruit"},
  {name: "brocoli", type: "vegetable"},
  {name: "papaya", type: "fruit"},
  {name: "eggplant", type: "vegetable"}
]

var filterProducts = []

for (var i = 0; i < products.length; i++) {
  if (products[i].type === 'fruit') {
    filterProducts.push(products[i])
  }
}

console.log(filterProducts)
