// Write a function called "generateRange" that takes in
// three arguments "min", "max", "step" of type Number
// and returns a range of integers of type array
// starting at min and ending with max
// so generateRange(2, 10, 2) would return [2,4,6,8,10]
// Be aware if the step is less than 1 then return an empty array []

function generateRange(min, max, step){
  // Make sure step is not less than 1.
  if(step < 1){
    return [];
  }
  
  // If we have a valid step continue with the code below
  let returnArray = [];
  // For-loop
  for(let i = min; i <= max; i += step){
    returnArray.push(i);
  }
  return returnArray;
}

module.exports = generateRange;
