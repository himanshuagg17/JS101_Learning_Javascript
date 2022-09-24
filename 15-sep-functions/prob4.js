function sum(arr){
  let sums=0;
  for(let i=0;i<=arr.length-1;i++){
        sums=sums+arr[i];
  }
  return sums;
}
let avg=(sum([32,21])/2);
console.log(avg);
