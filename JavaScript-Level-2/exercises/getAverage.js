// It's the academic year's end, fateful moment of your school report.
// The averages must be calculated.
// All the students come to you and
// entreat you to calculate their average for them. Easy !
// You just need to write a script.
// Return the average of the given array rounded down to its nearest integer.
// The array will never be empty.
//
// Note: The name of the function will be getAverage.
// It will take in one argument of type array and it will return a number.
// You will need to round the number down. Do a google search for
// "round down number javascript"

function getAverage(scoreArray){
  let scoreSum = 0;
  let scoreItems = scoreArray.length;

  for(i = 0; i < scoreItems; i++){
    scoreSum = scoreSum + scoreArray[i];
  }

  return Math.floor(scoreSum/scoreItems);
}

module.exports = getAverage;
