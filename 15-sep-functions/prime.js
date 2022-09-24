function prime(n){
  let factors=0;
  for(let i=1;i<=n;i++){
    if(n%i==0){
      factors++;
    }
  }
if(factors==2){
   return true;
}
  else{
  return false;
  }
} 
for(let i=2;i<=15;i++){
  let ans=prime(i);
  if(ans==false){
    console.log(i, " is non-prime");
  }
}
