const prompt =require("prompt-sync")();
let n=parseInt(prompt("Enter number of array elements needed(in number):- "))
let arr=[];
for(let i=0; i<n; i++)
{
    let val=prompt(`Enter your element at index ${i} : `);
    arr.push(val);
}
console.log("Your created array is :- ")
console.log(arr);
console.log("After making it string");
console.log(arr.join('+'));