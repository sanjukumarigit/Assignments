// A Prime number is a number greater than 1 that is divisible only by 1 and itself.

const input:number=9;
let prime:boolean=true;

//Check if the number is less than or equal to 1  because prime no start from 2
if(input<=1)
{
    console.log(input+ "is not a prime number");
    prime=false;

}

for(let i:number=2;i<input;i++)
{
    if(input%i==0)
    {
        prime=false;
        break;
    }
}

if(prime)
{
    console.log(input+ " is a prime number");
}
else
{
    console.log(input+ " is not a prime number");
}
export{};




