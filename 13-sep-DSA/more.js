let count=0;
let arr=[12,32,13,65,37];
for(let i=1;i<arr.length-1;i++){
  if(arr[i]>arr[i-1] && arr[i]>arr[i+1]){
    count++;
  }
}
console.log(count);