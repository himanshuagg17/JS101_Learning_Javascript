//print products with rating more than 4.2
let apple=[
  {name:"macbook",rating:4.6},
  {name:"iphone12",rating:4.8},
  {name:"iphone5",rating:4.1},
  {name:"mac air",rating:3.9},
];
for(let i=0;i<=apple.length-1;i++){
  if(apple[i].rating>4.2){
    console.log(apple[i].name);
  }
}