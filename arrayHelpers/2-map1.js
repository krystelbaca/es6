// Using map, create a new array that contains the distance / time value from each trip.
// Assign the result to the variable 'speeds'.

var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

var speeds;

speeds = trips.map(trip => trip.distance/trip.time)

console.log(speeds)
