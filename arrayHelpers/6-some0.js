//El método some() verifica si algún elemento de un array 
// cumple con el test implementado por la función brindada.

//arr.some(callback[, thisArg])
/*callback
  Función que verifica cada elemento, toma tres argumentos:
currentValue
  El elemento actual del array.
index
  El índice del elemento del array que se está procesando.
array
  El array sobre el que ha sido llamada la función some().
thisArg
  Opcional. Valor a usar como this cuando se ejecute callback.*/

//Verify that in the array exist "gouda"

var products = [
  {name: "peach", type: "fruit", quantity: 0, price: 17},
  {name: "orange", type: "fruit", quantity: 30, price: 15},
  {name: "brocoli", type: "vegetable", quantity: 2, price: 20},
  {name: "papaya", type: "fruit", quantity: 1, price: 25},
  {name: "cheedar", type: "lact", quantity: 20, price: 50},
  {name: "gouda", type: "lact", quantity: 0, price: 90}
]

console.log(
  products
    .some(product => product.name === 'gouda')
)