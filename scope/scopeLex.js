/*
  Scope
  - Lexical Scope

  Search
  - Execution Context
  - Lexical Environment
*/

function parent() {
    let a = 10;
    function child() {
        let a = 20;
        console.log(`From Child ${b}`);
        console.log(a);
        function grandChild() {
            b = 100;
            console.log(`From Grand Child ${a}`);
            console.log(`From Grand Child ${b}`);
        }
        grandChild();
    }
    child();
}

parent();