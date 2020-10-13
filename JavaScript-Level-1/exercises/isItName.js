// Write a function called "isItName" that accepts one argument
// of type String named "name" and returns either "Ola Universe" if the name
// is an empty string eg. "" or not provided at all otherwise the function returns
// "Ola <name>"

function isItName(name){
  if(name){
    return "Ola "+name;
  }
  else{
    return "Ola Universe";
  }
}

module.exports = isItName;
