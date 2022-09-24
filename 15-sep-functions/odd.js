function isOdd(n){
  if(n%2!=0){
    return true;
  }
  else{
  return false;
}
}
for(let i=0;i<=10;i++){
  let ifOdd=isOdd(i);
  if(ifOdd==true){
    console.log(i," is odd");
  }
  else{
    console.log(i," is not odd");
  }
}