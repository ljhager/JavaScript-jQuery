var br = "<br>";

// CONDITIONALS
// if
var stock = 100;
var sold = 20;
var difference = stock - sold;
if(difference > 0) {
    document.write(difference);
}

// if-else
var expression = 5+2;
var solution = 7;
if(expression == solution) {
    document.write(br + 'Congratulations');
} else if (expression != solution) {
    document.write(br + 'Incorrect')
}

var expression = 5+2;
var solution = 99;
if(expression == solution) {
    document.write(br + 'Congratulations');
} else if (expression != solution) {
    document.write(br + 'Incorrect')
}

// else-if
var total = 76;
if(total > 100) {
    document.write('<p>Total is more than 100</p>');
} else if(total > 50 && total <= 100) {
    document.write('<p>Total is greater than 50 but not more than 100</p>');
} else {
    document.write('<p>Total is small</p>');
}

var total = 125;
if(total > 100) {
    document.write('<p>Total is more than 100</p>');
} else if(total > 50 && total <= 100) {
    document.write('<p>Total is greater than 50 but not more than 100</p>');
} else {
    document.write('<p>Total is small</p>');
}

var total = 31;
if(total > 100) {
    document.write('<p>Total is more than 100</p>');
} else if(total > 50 && total <= 100) {
    document.write('<p>Total is greater than 50 but not more than 100</p>');
} else {
    document.write('<p>Total is small</p>');
}

// Multiple conditions 

var salary = 80000;
if(salary >= 70000 && salary <= 1000000) {
    document.write('<p>Good salary</p>');
} else {
    document.write('<p>Keep saving</p>');
}

var salary = 30000;
if(salary >= 70000 && salary <= 1000000) {
    document.write('<p>Good salary</p>');
} else {
    document.write('<p>Keep saving</p>');
}


// LOOPS
//while
var num = 1;
while (num <= 5) {
    document.write(num + ' <br>');
    num++;
}

// do-while
var i = 1;
do {
    document.write(i + ' <br>');
    i++;
} while (i <= 5);

// for
var arrPlanets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto']
for (var i=0; i<arrPlanets.length; i++) {
    document.write(br + arrPlanets[i]);
}


// FUNCTIONS
//Functions and arguments
function makeAwesome() {
    document.write(br + br + 'Asheville is awesome!');
}
makeAwesome();

// Multiple arguments
function multiplyNumbers(num1, num2) {
    var finalProduct = num1 * num2;
}
multiplyNumbers(7, 17);
