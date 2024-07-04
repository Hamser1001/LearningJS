/*
  Var
  - Redeclare (Yes)
  - Access Before Declare (Undefined)
  - Variable Scope Drama [Added To Window] ()
  - Block Or Scope Function

  Let
  - Redeclare (No => Error)
  - Access Before Declare (Error)
  - Variable Scope Drama ()
  - Block Or Scope Function

  Const
  - Redeclare (No => Error)
  - Access Before Declare (Error)
  - Variable Scope Drama ()
  - Block Or Scope Function
*/



// Syntax ( Keyword VariableName (= Assignement Operator) Variable VLaue )
var user = "Hamza";
var age = 30;
console.log(user);

console.log(hello); // Id is a variable
hello.innerHTML = "option" // changing the content of hello id div  