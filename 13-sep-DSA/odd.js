let arr=[1,4,8,19,34];
let count=0;
for(let i=0;i<=arr.length-1;i++){
  if(arr[i]%2!=0){
    if(arr[i-1]%2==0 || arr[i+1]%2==0){
      count++;
    }
  }
}
console.log(count);