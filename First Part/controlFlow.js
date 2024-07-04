let price = 100;
let discount = false;
let discountAmount = 30;
let country = "Cuba";
let student = true;


if (discount === true) {
    price -= discountAmount;
} else if (country === "Morocco") {
    price -= 40;
} else if (country === "Algeria") {
    price -= 50;
} else {
    price -= 10;
}

console.log(price);
