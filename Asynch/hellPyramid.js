/*
  To Understand Ajax, Fetch, Promises

  Pyramid Of Doom || Callback Hell

  - What Is Callback
  - Callback Hell Example

  What Is Callback
  - A Function That Is Passed Into Another One As An Argument To Be Executed Later
  - Function To Handle Photos
  --- [1] Download Photo From URL
  --- [2] Resize Photo
  --- [3] Add Logo To The Photo
  --- [4] Show The Photo In Website
*/

function makeItRed(e) {
    e.target.style.color = "red";
};

let p = document.querySelector(".test");
p.addEventListener("click", makeItRed);

function iamACallback() {
    console.log("i am a callback function");
};

setTimeout(iamACallback, 2000);

setTimeout(() => {
    console.log("download photo from url");
    setTimeout(() => {
        console.log("resize Photo");
        setTimeout(() => {
            console.log("add Logo to the photo");
            setTimeout(() => {
                console.log("show the photo in website");
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);