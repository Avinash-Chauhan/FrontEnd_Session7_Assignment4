//closure function where innerFunction can access properties of outerFunction but OuterFunction cannot access the properties of inner Function
function outerFunction()
{

  function innerFunction()
  {
    //printing the result in output 
    console.log("Hello World from inner function");
  }
 innerFunction();
}
outerFunction();