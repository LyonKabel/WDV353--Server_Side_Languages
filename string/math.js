// Add
function add(a, b) {
    return a + b;
  }
  
  // Subtract
  function subtract(a, b) {
    return a - b;
  }
  
  // Multiply
  function multiply(a, b) {
    return a * b;
  }
  
  // Divide 
  function divide(a, b) {
    if (b === 0) {
      console.log("Cannot divide by zero");
    }else{
        return a / b;
    }
    
  }
  function sqrt(a){
    return Math.sqrt(a);
  }


  function max(a, b){
   return Math.max(a,b);
  }
  
  // Exporting the functions for testing
  module.exports = { add, subtract, multiply, divide, max, sqrt };