//1. Initialization.
//2. Reassignment
//3. Redeclaration 
//4. Scope

//Initialization means-adding value at the time of declaration
const a=10;//For constant its mandatory to initialize at the beginning
let b; //Can be initialized latter
var c;


//Reassignment -Changing the value of a variable after its is declared.
a=230;// We cannot change the value of a variable with a constant declaration
b=34;
c=50;


//Redeclaration--Using the same variable to store different data, or reducing the variable to store different data
const a="Bharath";// we cannot redeclare if we are using constant declaration.
let b="Reddy";  // we cannot redeclare if we are using constant declaration.
var c="Playwright";


//Scope  ---Its about where we can used the data
{
    const x=100;
    let y=200;
    var z=400;

    console.log(x);
    console.log(y);
    console.log(z);

}
console.log(x);  //x is blocked scoped, we cannot access it outside the block.
console.log(y);   ////y is blocked scoped, we cannot access it outside the block.
console.log(z);  //var is function scoped, we can access it outside the block.