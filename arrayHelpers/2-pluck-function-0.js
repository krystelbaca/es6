// Implement a 'pluck' function.  Pluck should accept an array
// and a string
// representing a property name and return an  array containing that property
// from each object.

var paints = [ 
{ color: 'red', mx: true }, 
{ color: 'blue', mx: false }, 
{ color: 'yellow', mx: true }
];
var result = pluck(paints, 'color'); // should return ['red', 'yellow', 'blue'];

function pluck (array, obj){
  return array.map(array =>  array[obj])
}

console.log(result)