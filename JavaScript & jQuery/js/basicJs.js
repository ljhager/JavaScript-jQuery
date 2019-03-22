// Create Variables
var num = 73;
document.write(num);
"<br>"
var msg = "The best number is 73";
document.write("<br>" + msg);


// Perform Operations
var num2 = 13;
var num3 = 7.3;
var sum = num2 + num3;
document.write("<br>" + "<br>" + sum);

var difference = num2 - num3;
document.write("<br>" + difference);

var product = num2 * num3;
document.write("<br>" + product);

var quotient = num2 / num3;
document.write("<br>" + quotient);

var remainder = num2%num3;
document.write("<br>" + remainder);


// Cancatenation and Escaping
var name = "Tom \"Alley Cat\" O'Malley";
var num4 = "64";
var num5 = 1;
document.write("<br>" + "<br>" + name + " is" + " " + num4 + " years old.");

var total = num4 + num5;
document.write("<br>" + total);


// Create Indexed Arrays
var arrFood = [];
arrFood[0] = "Pizza";
arrFood[1] = "Strawberries";
arrFood[2] = "Shrimp";
arrFood[3] = "Spaghetti";
document.write("<br>" + "<br>" + arrFood[1]);

document.write("<br>" + arrFood.length);


// Add a single element to the end of the array //
arrFood[4] = "Chicken";
document.write("<br>" + "<br>" + arrFood);


// Add multiple elements to the end of the array //
arrFood.push("Cookies", "Potatoes");
document.write("<br>" + "<br>" + arrFood);


// Add multiple elements to the beginning of the array //
arrFood.unshift("Rice", "Grapes");
document.write("<br>" + "<br>" + arrFood);


// Remove a single element from the beginning of the array //
arrFood.shift();
document.write("<br>" + "<br>" + arrFood);


// Remove a single element from the end of the array //
arrFood.pop();
document.write("<br>" + "<br>" + arrFood);


// Create a multi-dimensional array //
var arrFruits = [];
    arrFruits = ["Tomato", "Mango", "Orange"];

var arrVegetables = [];
    arrVegetables = ["Broccoli", "Spinach", "Carrot", "Radish"];

var arrProduce = [arrFruits, arrVegetables];
document.write("<br>" + "<br>" + arrProduce[1][0]);