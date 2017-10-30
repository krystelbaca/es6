// Create a function called 'reject'.  Reject should work
// in the opposite way of 'filter' - if a function returns 'true', the item
// should *not* be included in the new array.  Hint: you can reuse filter.
// For: example
// var numbers = [10, 20, 30];
// var lessThanFifteen = reject(numbers, function(number){
//   return number > 15;
// });
// lessThanFifteen // [ 10 ];

function reject(array, iteratorFunction) {
 return array.filter(arg => /*!(arg > 15)*/ !iteratorFunction(arg))
}

var numbers = [10, 20, 30];
var lessThanFifteen =  reject(numbers, function(number){
  return number > 15
});
console.log(lessThanFifteen)


var filterProducts = []
function myFilter(numbers, iteratorFunction) {
  for (var i = 0; i < numbers.length; i++) {
    if (iteratorFunction) {
      filterProducts.push(numbers[i])
    }
  }
  return filterProducts
}

console.log(myFilter(numbers, (numbers > 15)))