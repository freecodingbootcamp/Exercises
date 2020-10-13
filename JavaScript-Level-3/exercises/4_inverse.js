// Given a set of numbers, return the additive inverse of each.
// Each positive becomes negatives, and the negatives become positives.
//
// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers.
// Do not mutate the input array/list.

function inverse(set){
  let inverseSet = [];
  let inverseIndex = 0
  for (let i = 0; i < set.length; i++) {
    inverseIndex = set[i] - (set[i]*2);
    inverseSet.push(inverseIndex);
  }
  return inverseSet;
}

module.exports = inverse;
