// declare first and last name variables
const firstName = "Tayler";
const lastName = "Ondersma";
// create name variable to concatenate  
// first and last name variables using a template literal
// (could also be done: const name = firstName + " " lastName;
//  but the additon operator is no the preferred way)
const name = (`${firstName} ${lastName}`);
// log full name in the console 
console.log(name);
// declare population variable, set it pop of Detroit
const population = 674841;
// log population of Detroit to the console
console.log(population);
// multiple Detroit population by 3 
console.log(population*3)
// declare javaScriptIsCool variable and set it to true
const javaScriptIsCool = true; 
// declare colors variable as an array of the colors of the rainbow (each color is a string)
const colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"]
// loop that counts from 1 to 5 then log to console
var num = 0
while (num < 5){
num++;
console.log(num);
}
// loop that counts from 0 to 4 then log to console
var num = -1;
while (num < 4){
num++;
console.log(num);
}