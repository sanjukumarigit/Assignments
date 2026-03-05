//Data type in java script
//1. Primitive data type--Immutable
//2. non Primitive data type  --Mutable

//immutable
let a=10;
a+10;
console.log(a);

//Mutable
let obj={
    "name": "bharath",
    "id": 23333,
}
obj.age=34;
console.log(obj);

//Data type in javascript
/** primitive data type---- */

//boollean , number, string , null, undefined and symbol



//1. number -The data type to store decimals, =without  decimals and without any quotations.
let num1=100;
let num2=12.3444;
console.log(typeof num1);
console.log(typeof num2);

//2 . string ---> The data type to store text values or a characters together within the quotations.
let empName='Bharath';
let location ="Hyderabad";
let company='Microsoft';

console.log(typeof empName);
console.log(typeof location);
console.log(typeof company);

console.log("Employee name :" +empName+ "Employee location is " +location);
console.log('Employee name is ${empName} and Emp location is  ${location}');

//3. Boolean ---the data type to store true or false value
let x=10;
let y=20;
let z= (x>y);
console.log(typeof z);

//4. undefined ---undefined declare a variable but not assign any value ie absense of value
let age;
console.log(age);

//5. null---null represent a variable that has been declared and assign a null or empty value
let salary=1000;
salary=null;
console.log(salary);

//6. Symnbol--Represent a unique hidden identifier.

//Non Primitive data type.
//1. object -object type referes to the collection of key value pairs within the curly braces.
let person={
    name: "Sanju",
    empId: 1233,
    visaStatus: true,
    address:{
            city: "hyderabad",
            state: "TS",
            zip: 500081
    }
}
person.salary=100000;

console.log(person.name);
console.log(person.address.city);

console.log(person["name"]);
console.log(person.address["city"]);

console.log(person);

//2 Array -Array represents a list of values
let fruits=["apple", "mango","grapes"];
let prices=[100,300,450];
let fruitsAndPrices=['apple', 300,'mango',240,'grapes',400]
console.log(fruits);
console.log(prices);
console.log(fruitsAndPrices);
console.log(fruits[1]);
console.log(fruitsAndPrices[3]);


//3 Functions -represent a block of code or collection of statements return together to complete a particular task
