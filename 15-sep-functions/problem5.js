function names(str){

let bag="";
for(let i=0;i<=str.length-1;i++){
  if(str[i]==" "){
    bag=bag+"-"
  }
  else{
    bag=bag+str[i];
  }
}
return bag;
}  
console.log(names("Munna Bhai is my boss"));