//String : is a collection of characters. In typescript , we can used single quote(''),
//double quotes ("") or backticks(``) to declare

//example of string declaration
let firstName:string="John";
let lastName:string='Doe';
let fullName:string =`${firstName} ${lastName}`;
console.log(fullName);


/**************String Methods************************ */
//1. Storing string in a variable
console.log("1. Storing string in a variable");
let originalString:string ="   Username: Admin |   Password: admin123";
console.log(originalString);

//2. Calculate the total number of characters available in string -->String.length
console.log("Calculate the total number of characters available in string");
let stringLength:number=originalString.length;
console.log("Total numbers of character in string are " +stringLength);

//3. Get the specific characters from the string at a specific index.==>string.charAt(index);
console.log("Get the specific characters from the string at a specific index");
let charAtIndex5=originalString.charAt(5);
console.log("char available at index 5: "+charAtIndex5);


//4. Reverse the string
let reverseString:string="";
for(let i:number=stringLength-1;i>=0;i--){
    reverseString=reverseString+originalString.charAt(i);
}
console.log("Reversed String is : '"+reverseString+"'");

//5. Removing all the spaces from the string  ==>string.trim()
console.log("5. Remove unawanted spaces from the string");
let trimmedString:string=originalString.trim();
console.log("Trimmed String is '" +trimmedString+"'");

//6.Removing all the numbers from the string ==>string.replace(/[exp/g, ''])
console.log("5. Remove all the number from the string");
let stringWithoutNumber:string=originalString.replace(/[0-9]/g, '');
console.log("String without  number '" +stringWithoutNumber+" '");

//7.Removing all the alphabet from the string ==>string.replace(/[exp/g, ''])
console.log("5. Remove all the number from the string");
let stringWithoutAlphabet:string=originalString.replace(/[a-zA-Z]/g, '');
console.log("String without alphabet '" +stringWithoutAlphabet+" '");


//8. Removing all the special characters from the string ==>string.replace(/[exp/g, ''])
console.log("5. Remove all the special characters from the string");
let stringWithoutSpecialChars:string=originalString.replace(/[^0-9a-zA-Z]/g, '');
console.log("String without special char '" +stringWithoutSpecialChars+" '");


//9.Convert the string to uppercase==>string.toUpperCase();
console.log("Convert the string to uppercase");
let upperCaseString:string=originalString.toUpperCase();
console.log("Uppercase String is  '" +upperCaseString+" '");

//10.Convert the string to lowercase==>string.toLowerCase();
console.log("Convert the string to uppercase");
let lowerCaseString:string=originalString.toLowerCase();
console.log("Lowercase String is  '" +lowerCaseString+" '");



//11. Extract the specific part of the string by using starting and ending indexes ==> string.subString(startIndex, endIndex)
console.log("Extract the specific part of the string by using starting and ending indexes");
let username:string=originalString.substring(12, 17);
let Password:string=originalString.substring(15,25);
console.log("Extracted username is : '"+username+"'" );
console.log("Extracted password is : '"+Password+"'" );


//12. Extract the specific part of the string from dynamic text using the split method ==> string.split(referencechar);
console.log("Extract the specific part of the string by using starting and ending indexes");
let parts:string[]=originalString.split("");
console.log(parts);
console.log("Extracted username is : '"+parts[3]+"'" );
console.log("Extracted password is : '"+parts[7]+"'" );

//13. Compare two different string
//==(loose equality)  ==>compares the value of the string and the types of the string and return true if they are equal , otherwise false
//===(Strict equality) ===>compares both the value and the types of the string and return true if they are equal , otherwise false
//includes() method--is used to check if the string contains a specific substring .It returns true if the substring is found, otherwise false
//startswith() method---is used to check if the string start with specific substring . It returns true if the string start with the substring otherwise false
//endWith() method---is used to check if the string end with specific substring . It returns true if the string end with the substring otherwise false


console.log("Compare two different string");
let string3:string="100";
let number2:number=100;

//console.log(string3 == number);
//console.log(string1 === number1);

let string2:string ="Hello World";
console.log(string2.includes("ello"));
console.log(string2.includes("Hello"));
console.log(string2.includes("World"));


//14. Data type conversion: Converting a string to a number and vice versa.
console.log("14. Data type conversion: Converting a string to a number and vice versa.");

//Convert other data type to string. 
let stdCode:number = 144 ;
let ph:number = 234567;
let StdCode:string = String(stdCode);
console.log(StdCode+ph);

//Convert string to other datatypes
let balance:string ="Account balance is 19,999.99 rupees";
balance = balance.replace(/[^0-9.]/g, ''); // Remove non-numeric characters except the decimal point
let balanceNumber:number = parseFloat(balance); //parseInt() , parseFloat(), parseBool() are used to convert string to number and boolean respectively.
console.log(balanceNumber>=10000);
















