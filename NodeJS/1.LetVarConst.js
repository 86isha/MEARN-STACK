// javascript is datatype less programming
// javascript is case sensitive
// javascript is loosely typed language

// 1. Hoisiting
// 2. Clousers
// 3. Scope
// 4. this keyword
// 5. Call stack vs Main Stack
// 6. Event loop
// 7. Promises
// 8. Async Await

// let var const : lifetime of any variable, scope
// 1. scope
// 2. hoisiting
// 3. mutabiltity = changes are allowed
// 4. immutability = changes not allowed

// var  : function scoped
// let and const : block scope
// block {} if-else loops

// console.log(a);
// var a;

// reassignment redeclaration
// var a=10;
// console.log(a);
// var a=5;
// console.log(a);
// let a=10;
// console.log(a);
// a=9;

// var a = 5;
// function inner() {
//   console.log(a);
//   let a = 4;
// }
// inner();

// a();
// var a = () => {
//   console.log("hello");
// };

// a();
// function a() {
//   console.log("hello");
// }

// const calculator = (a, b, operation) => {
//   return operation(a, b);
// };
// var a = 5;
// var b = 3;
// console.log(
//   calculator(a, b, (a, b) => {
//     return a + b;
//   })
// );

// console.log(
//   calculator(4, 3, (a, b) => {
//     return a - b;
//   })
// );