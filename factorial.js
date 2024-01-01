let a=6;
let arr = new Array();
for(let i=1; i<=a; i++){
    arr.push(i);
}
console.log(arr);
let x= arr.reduce((val,ind)=>
    {
        let fact= val*ind;
        console.log(fact);
        return fact;
    })
    console.log(x);