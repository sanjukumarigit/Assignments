//Exception Handling-->handling the exception
//try, Catch, finally---When their is an exception and you want to handle the exception and continue the execution plan
//throw ---When their is no exception , but the user is intentionally want to fail the program by throwing an exception

let input:any;
//console.log(input.toLowercase());
//console.log("execution is completed");
try{
    console.log(input.toLowerCase()); //Plan A
}catch(error)
{
console.log("I guess their is problem in the 'input.toLowerCase()' method")
console.log(input.toUpperCase()); //Plan B
}finally 
{
console.log("Execution is completed"); //Mandatory block to be executed when their is an exception or not.
}