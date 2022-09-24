function diff(a,b){
  return a-b;
}
let x=diff(12,10);
function absolute(x){
  if(x>=0){
    console.log(x);
  }
  else{
    console.log(-x);
  }
}
//diff(a,b);
absolute(diff(10,23));