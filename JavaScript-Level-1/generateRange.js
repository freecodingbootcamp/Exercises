// Write a function called "generateRange" that takes in
// three arguments "min", "max", "step" if type Number
// and returns a range of integers of type array
// starting at min and ending with max
// so generateRange(2, 10, 2) would return [2,4,6,8,10]

// *** YOUR CODE HERE *** //
/*const generateRange = (min, max, step = 1) => {
    let numArray = []
    if (!( (typeof min === "number") && (typeof max === "number" ) &&  (typeof step === "number") )){
        return null
    } else if (step === 0) {
            return numArray
    }   else {
        for(let i = min; i <= max; i += step){
            numArray.push(i)  
          }
    }

    

    return numArray
}*/
function generateRange(min, max, step = 1) {
    let numArray = []
    if (!( (typeof min === "number") && (typeof max === "number" ) &&  (typeof step === "number") )){
        return null
    } else if (step === 0) {
            return numArray
    }   else {
        for(let i = min; i <= max; i += step){
            numArray.push(i)  
          }
    }

    

    return numArray
}

module.exports = generateRange;