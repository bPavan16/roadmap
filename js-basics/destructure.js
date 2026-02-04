const colors = ["red", "green", "blue"];

const [c1, c2, c3] = colors;

console.log(c1)
console.log(c2)
console.log(c3)


const user = {
    name: "Pavan",
    age: 21
};

const { name: username, age: userAge } = user;

console.log(username); // Pavan
console.log(userAge);  // 21


// Swapping variables

let x = 10;
let y = 20;

[x, y] = [y, x]

console.log(x, y)

const arr1 = [1,2,3,4,5]
const arr2 = [6,7,8,9,10]

const merged = [...arr1 , ...arr2]

console.log(merged)


// Spread in functions

const nums =[1,2,3] 

const sum = (a,b,c)=>{
return a+b+c
}

console.log(sum(...nums))