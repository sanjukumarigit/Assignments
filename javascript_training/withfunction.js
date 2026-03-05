//TestCase1: Verify the home page
console.log(".............TC1: Verify the Home page...................");

launchBrowserAndLogin("Chrome");
logoutAndCloseBrowser();

//TestCase2: Verify the account balance
console.log(".............TC2: Verify the Account Balance...................");
launchBrowserAndLogin("Firefox");
getBalance();
console.log("Verify the account balance displayed as " + getBalance());
logoutAndCloseBrowser();



function launchBrowserAndLogin(browserName){
console.log("Launch the $(browserName) Browser");
console.log("Enter the url -https://www.icici.com/");
console.log("Enter the username as 'Bharath and Password as 'Bharat123'");
console.log("click on the login button");
}

function logoutAndCloseBrowser(){
    console.log("log out of the application");
    console.log("Close the browser");
}

function getBalance()
{
    console.log("Navigate to the account balance page");
    let accountBalance=100000;
    return accountBalance;
}


//Framework is all about creating multiple common methods to reduce the duplicate.

//Set: -Set represents a collections of unique values
let empIds=new Set();
empIds.add(1234);
empIds.add(3422);
//empIds.add(1234); //Duplicate value will not be added to the set
console.log(empIds)


//Map: -Map represents a collections of key value pairs. Mays wont allows duplicate keys, but alwayds duplicate value are allowed
let empData=new Map();
empData.set(123,"Bharath");
empData.set(124,"Sarath");
empData.set(125,"Hemanth");
empData.set(1256,"Sarath");
console.log(empData);









//Date: - Date represents a specific point in time.





