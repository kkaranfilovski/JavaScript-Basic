// Write a JavaScript program that will calculate area of Circle TIP: area = π * r2

console.log("========== Area of a circle ==========");

let radius = 5;
let circleArea = radius * radius * Math.PI;

console.log("The radius of the circle is: ", radius);
console.log("The area of the circle is: ", circleArea)


// Write a JavaScript program that will calculate the price of 30 Phones, where the price of one phone is $119.95 and the tax rate is 5%.

console.log("========== Total price of phones ==========")

let phones;
let phonesPrice;
let taxRatePercentage;
let taxRate;
let totalPrice;

phones = 30;
phonesPrice = 119.95;
taxRatePercentage = 5;
taxRate = 1 + (taxRatePercentage / 100);
totalPrice = phones * phonesPrice * taxRate;

console.log("Number of phones: " , phones);
console.log("Price of one phone: ", phonesPrice, "$");
console.log("Tax rate: ", taxRatePercentage, "%");
console.log("The total price is: ", totalPrice, "$");
