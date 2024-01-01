function numIter(array) {
  var ind = 0;
  return {
    next1() {
      if (ind < array.length) {
        return {
          value: array[ind++],
          done: false
        }
      } else {
        return {
          value: undefined,
          done: true
        }
      }
    }
  }
}
let arr = [1, 2, 3, 4];
let num = numIter(arr);
let result = num.next1();
while(!result.done){
  console.log(result.value)
  result=num.next1();
}
let i = arr[Symbol.iterator]();
let result1 = i.next();
while(!result1.done){
  console.log(result1);
  result1= i.next();
}