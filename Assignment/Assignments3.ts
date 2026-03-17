const studentNames11:string[]=['Suresh','Mahesh','Naresh'];
const studentMark:number[]=[75,50,80];

let total11:number=0;
let updatedMarks11:number[]=[];

console.log("Updated MArks");

for(let i =0;i<studentMark.length;i++)
{
    updatedMarks11[i]=studentMark[i]+10;
     total11 +=updatedMarks11[i];
     console.log(`${studentNames11[i]}: ${updatedMarks11[i]}`);
}

const average1:number=total11/updatedMarks11.length;

// Create array to store student names
const studentNames1: string[] = ['Suresh', 'Mahesh', 'Naresh'];

// Create array to store student marks
const studentMarks1: number[] = [75, 80, 82];

// Variable to store total marks for average calculation
let total1: number = 0;

// Create a new array to store updated marks
const updatedMarks1: number[] = [];

// Print heading before displaying updated marks
console.log("Updated Marks:");

// Loop through studentMarks array using normal for loop
for (let i = 0; i < studentMarks.length; i++) {

    // Add 10 marks to each student without modifying original array
    updatedMarks[i] = studentMarks[i] + 10;

    // Add updated mark to total for average calculation
    total += updatedMarks[i];

    // Print student name with updated mark
    console.log(`${studentNames[i]}: ${updatedMarks[i]}`);
}

// Calculate average marks
const average11: number = total / updatedMarks.length;

// Print average marks rounded to 1 decimal place
console.log(`Average Marks: ${average}`);