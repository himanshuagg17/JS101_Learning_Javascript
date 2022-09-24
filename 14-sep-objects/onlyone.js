let arr=[12,11,32,12,32,78];
let obj={};
for(let i=0;i<=arr.length-1;i++){
  if(obj[arr[i]]==undefined){
    obj[arr[i]]=1;
  }
  else{
    obj[arr[i]]++;
  }
}
for(let key in obj){
  if(obj[key]==1){
    console.log(obj[key]);
  }
}