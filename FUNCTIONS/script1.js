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

function add(...values){
    let sum = 0;
    for (let i=0; i < values.length ; i++){
        sum += values[i];

    }
    console.log(sum);
}

add(10,90,89);

