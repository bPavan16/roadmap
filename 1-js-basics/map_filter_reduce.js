// MAP 

const users = [
  { name: "Pavan", age: 21 },
  { name: "Rahul", age: 22 },
  {name : "Nischant", age:26},
  {name : "Tharanesh", age:28},
];

const names = users.map((user)=>{
    return user.name
})

console.log(names)

const nums = [1,2,3,4,5,6,7,8,9,10]

sqs = nums.map((num)=>{
    return num*num
})

console.log(sqs)

nums.map(n=>n*2)

// FILTER

const even = nums.filter((num)=>{
    return num%2==0
})

console.log(even)

const seniors = users.filter((user)=>{
   return user.age>25
})

console.log(seniors)

// FILTER