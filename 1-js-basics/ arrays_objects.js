let arr = ["hello", "one", "three"];

console.log(arr);

arr.push("four");

console.log(arr);

// arr.pop()

console.log(arr);

arr.unshift("zero");

console.log(arr);

// arr.shift()

console.log(arr);

const user = {
  name: "pavan",
  age: 31,
  work: "SDE-1",
};

console.log(user);

arr.forEach((ele, idx) => {
  console.log(idx, ele);
});

const two_arr = [
  ["one", 100],
  ["two", 200],
  ["three", 300],
  ["four", 400],
];

two_arr.forEach(([word, val], idx) => {
  console.log(word, "=", val, idx);
});
