/*
  Function
  - Arrow Function
  -- Regular vs Arrow [Param + No Param]
  -- Multiple Lines
*/

let print1 = function () {
    return 10;
  };
  
  let print2 = () => 10;
  
  let print3 = function (num) {
    return num;
  };
  
  let print4= num => num;
  
  let print5 = function (num1, num2) {
    return num1 + num2;
  };
  
  let print6 = (num1, num2) => num1 + num2;
  
  console.log(print6(100, 50));