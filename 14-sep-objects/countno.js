let arr=[12,11,12,9,8,9,9,14];
let obj={};
for(let i=0;i<=arr.length-1;i++){
  if(obj[arr[i]]==undefined){
    obj[arr[i]]=1;
  }
  else{
    obj[arr[i]]++;
  }
}
console.log(obj);