function evaluateLoan(
customerName: String,
creditScore: number,
income: number,
isEmployed: boolean,
debtToIncomeRatio: number,
):void
{

console.log("loan Evaluation result:", evaluateLoan);
if(creditScore>750)
{
    console.log("Loan Approved: Excellent credit score.");
}else if(creditScore>=650)
{
    if(income>=50000)
    {
        if(isEmployed)
        {
            if(debtToIncomeRatio <=40.0)
            {
                console.log("Loan Approved: Meets all criteria.");
            }
            else
            {
               console.log("Loan Denied: Debt-to-Income ratio is too high"); 
            }
            console.log("Loan Denied: Customer is not employed."); 
        }
       console.log("Loan Denied: Income is less than required.");

    }
    console.log("Loan Denied: Credit score is too low.");
}
}
 
evaluateLoan(
    "John Doe",   // customerName
    800,          // creditScore
    55000.0,      // income
    true,         // isEmployed
    45.0          // debtToIncomeRatio
);

export {};






