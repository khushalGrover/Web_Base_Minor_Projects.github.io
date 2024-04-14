
var a = 1;
let b = 2;
const c = 3;
{
    var a = 10; // this is shadowing the global variable a
    let b = 20; // this is a new variable b
    const c = 30; // this is a new variable c
    console.log("Inside block scope");
    console.log(a); 
    console.log(b);
    console.log(c);

}
console.log("Outside block scope");
console.log(a); // 10
console.log(b); // ReferenceError: b is not defined
console.log(c); // ReferenceError: c is not defined




//  illegal shadowing of a variable
console.log("Illegal shadowing of a variable");
let d =1;
{
    // var d = 2; // SyntaxError: Identifier 'd' has already been declared
    console.log(d);
}
console.log(d);