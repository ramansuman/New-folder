const prompt = require("prompt-sync")();
let arr1=[],arr2=[],sum1=0, sum2=0, result=0;
const n = prompt("Enter the required length of array 1 :- ");
const m = prompt("Enter the required length of array 2 :- ");
console.log();
for(let i=0; i<n;i++){
    let x= prompt(`Enter the value of array 1 at position ${i+1}:- `);
    arr1.push(x);
    sum1+=parseInt(arr1[i]);
}
console.log();
for(i=0;i<m;i++){
    let x= prompt(`Enter the value of array 2 at position ${i+1}:- `);
    arr2.push(x);
    sum2+=parseInt(arr2[i]);
}
console.log();
console.log("Sum of all elements in array 1 is ", sum1);
console.log("Sum of all elements in array 2 is ", sum2);
result=sum1+sum2;
console.log("Sum of all elements in array 1 and array 2 id:- ",result);