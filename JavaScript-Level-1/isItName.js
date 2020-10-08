// Write a function called "isItName" that accepts one argument
// of type String named "name" and returns either "Ola Universe" if the name
// is an empty string eg. "" or not provided at all otherwise the function returns
// "Ola <name>"

function isItName(name){
  let empty = "";
  if(name === empty || name === null || name === undefined){
    return "Ola Universe";
  }else {
    return "Ola " + name;
  }
}

module.exports = isItName;
