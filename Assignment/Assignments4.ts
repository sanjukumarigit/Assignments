// Array of transactions: positive values represent credits, negative values represent debits
const transactions:number[] =[50000, -2000, 3000, -15000, -200, -300, 4000, -3000];

// Variables to store the count and amount of credits and debits
let totalCredits:number=0;
let totalDebits:number=0;
let totalCreditAmount:number=0;
let totalDebitsAmount:number=0;
let suspiciousTransactions:number=0;

// Iterate through each transaction in the array
for(const amount of transactions)
{
    if(amount>0)
    {
        totalCredits++;
        totalCreditAmount += amount;

        if(amount>100000)
        {
            console.log(`Suspicious credit transactions with Amount: ${amount}`);
        }
    }else{
          totalDebits++;
          totalDebitsAmount -= amount;

        if(amount>100000)
        {
            console.log(`Suspicious debit transactions with Amount: ${amount}`);
        }
    }
}
    // Final balance
    const finalBalance:number= totalCreditAmount+totalDebitsAmount;

    // Print summary
        console.log("----- Transaction Summary -----");
        console.log("Total number of credit transactions:", totalCredits);
        console.log("Total number of debit transactions:", totalDebits);
        console.log("Total amount credited:", totalCreditAmount);
        console.log("Total amount debited:", totalDebitsAmount);
        console.log("Final remaining amount in the account:", finalBalance);
        console.log("Total number of suspicious transactions:", suspiciousTransactions);
 export {};
