const prompt=require("prompt-sync")();
const n=prompt("Enter the length of array :- ");
const arr=[];
for(let i=0; i<n;i++)
{
    const val=prompt("Enter the value of array at index "+i+" :- ");
    arr.push(val);
}
console.log("Your created array :- ");
console.log(arr);
console.log("Array elements in uppercase");
let x=arr.map(ele=>
    {
        return ele.toUpperCase();
    })
console.log(x);