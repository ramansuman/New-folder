const prompt=require("prompt-sync")();
let n=parseInt(prompt("Enter the size of new array(in number) :- "))
let arr=[];
for(let i=0;i<n;i++)
{
    let val=prompt(`Enter the value at index ${i} :- `);
    arr.push(val);
}
console.log("Your created array is :- ");
console.log(arr);
let x=prompt("Enter the minimum length of element to be kept :- ");
let newArr=arr.filter((data)=>
{
    return data.length<x;
})
console.log("filtered array is :- ")
console.log(newArr);