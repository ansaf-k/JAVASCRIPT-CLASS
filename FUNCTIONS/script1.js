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


// //example for reduce 
// const numbers = [100, 120, 140, 160];

// let sum = numbers.reduce((total, num) => {
//     return total + num;
// });

// function add(total,num){
//     return total + num;
// // }
// console.log(sum);


// //Array map examples
// const fruit = ["apple","orange", "pineapple", "banana", "avacado"]
// const newArr = fruit.map((edit) => edit + "s")

// // function editText(fruits){
// //     return fruits + "s";
// // }

// console.log(newArr);



const friends = [{
        Name: "Habeebu",
        Age: 21,
        gender:"male"
    },
    {
        Name: "shamnad",
        age: 21,
        gender:"male"
    },
    {
        Name: "Thasni",
        Age: 22,
        gender:"female"
    },
    {
        Name: "Shifna",
        Age: 21,
        gender: "female"
    },
    {
        Name: "Kukku",
        Age: 20,
        gender:"female"
    },
]

const femalefriends = friends.filter(friend => friend.gender === "female")

console.log(femalefriends);
const malefriends = friends.filter(checkmale)

function checkmale(man){
    return man.gender === "male"
}

console.log("male friends : " , malefriends);






