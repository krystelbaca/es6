// The array below contains an array of objects, each of which is a representation
// of an image.  Using the forEach helper, calculate the area of each image and
// store it in a new array called 'areas'.  The area of an image can be calculated
// as 'image.height * image.width'.
// expected areas: [ 300, 1800, 1728 ]

var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
var areas = [];

images.forEach((arg,index) =>{
  areas[index] = arg.height * arg.width
})

console.log(areas)
