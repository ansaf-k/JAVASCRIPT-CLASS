// // function 
// function add (a,b,c){
//     return a+b+c;
// }
// // function call
// console.log(`answer is = ${add(1,2,3)}`); // Output: 6

// // function
// const greet = function (name){
//     return `HEllO ${name}!`;
// }
// // function call
// console.log(greet('Ansaf')); // Output: Hello John!

// // arrow function
// const greet = (name) => {
//     return `Hello, ${name}!`;
// }
// console.log(greet("ansaf"));
// console.log(greet("DUDE"));

// nested function
// function outerFunction(outervariable) {
//     return innerFunction(innervariable){
//         console.log(`Hello, ${outervariable} ${innervariable}!`);
//     }
// }


//rest parameters

// function add(...values){
//     let sum = 0;
//     for ( let i of values){
//         sum += i;

//     }
//     console.log(sum);
// }

// add(10,90,89);

// for in 

// const numbers = {
//     num1 : 10,
//     num2 : 20,
//     num3 : 30,
//     num4 : 40
// }

// // for in loop
// let sum = 0;
// for (let x in numbers){
//     sum += numbers[x];
// }
// console.log(sum); // Output: 100;


// //for each 
// const numbers = [10,20,30,40]

// // for each loop
// let sum = 0;
// numbers.forEach((values) =>{
//     sum += values;
// })

// console.log(sum);


//example for reduce 
const numbers = [100,120,140,160];

let sum = numbers.reduce((total, num) => {
    return total + num;
});

// function add(total,num){
//     return total + num;
// }
console.log(sum);