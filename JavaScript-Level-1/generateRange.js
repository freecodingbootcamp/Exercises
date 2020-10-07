// Write a function called "generateRange" that takes in
// three arguments "min", "max", "step" if type Number
// and returns a range of integers of type array
// starting at min and ending with max
// so generateRange(2, 10, 2) would return [2,4,6,8,10]

// *** YOUR CODE HERE *** //
function generateRange(min,max,step){
  let myArray = [];
  do {
    myArray.push(min);
    min = min + step;
  } while (min <= max);

  return myArray;
}


module.exports = generateRange;
