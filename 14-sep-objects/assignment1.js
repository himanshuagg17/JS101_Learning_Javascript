let names=["rohit","ganga","radha","shalu","mansi"];
let age=[20,34,43,13,24];
let arr=[];
for(let i=0;i<=names.length-1;i++){
  let obj={};
  obj.name=names[i];
  obj.age=age[i];
  arr.push(obj);
}
//console.log(arr);
for(let i=0;i<=arr.length-1;i++){
  if(arr[i].age>30){
    console.log(arr[i].name);
  }
}