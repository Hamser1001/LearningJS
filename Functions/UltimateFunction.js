/*
  Function Advanced Practice
  - Parameters
  - Default
  - Rest
  - Loop
  - Condition
*/

function showInfos(user = "Uknown", age = "Uknown", rate = 0, show = "Yes", ...skills) {
    document.write(`<div>`);
    document.write(`<h2>Welcome, ${user}</h2>`);
    document.write(`<p>Age: ${age}</p>`);
    document.write(`<p>Hour Rate: $${rate}</p>`);
    if (show === "Yes") {
      if (skills.length > 0) {
    document.write(`<p>Skills: ${skills.join(" | ")}</p>`);
      } else {
    document.write(`<p>Skills: No Skills</p>`);
      }

      
    } else {
      document.write(`<p>Skills Is Hidden</p>`);

    }
    document.write(`</div>`);

}

showInfos('Hamza', 30, 20, "No", "Html" ,"Css");