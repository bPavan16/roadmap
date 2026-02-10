let x: number = 10;

console.log(x);

// x = "harkirat"

console.log(x);

const greetFunc = (name: string) => {
  console.log(`Hello ${name}`);
};

const add = (a :number , b:number) =>{
    console.log(a+b)
}

interface User{
    name:string
    rollnum: number
    is_present:boolean
}

const printUser = (user:User) =>{
    console.log(user)
}
 
const newuser : User = {
    name:"Pavan",
    rollnum:10,
    is_present:true
}

printUser(newuser)