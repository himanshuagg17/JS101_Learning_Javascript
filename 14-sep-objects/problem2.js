//providing all the data
let data=[
  {
    grade: "V",
    students:[
      {name : "Nrupul",marks:[10,20,30]},
      {name :"Prateek",marks:[20,30,40]}
    ]
  } ,
  {
    grade: "VI",
    students:[
      {name:"Abraham",marks:[32,45,21]},
      {name:"Rinku",marks:[23,54,99]}
    ]
  },
  {
    grade:"VII",
    students:[
      {name:"Kamli",marks:[12,45,88]},
      {name:"Shalu",marks:[34,11,22]}
    ]
  }
];

//getting the desired results

for(let i=0;i<=data.length-1;i++){
  let highest=0;
  let studentName="";
  for(let j=0;j<=data[i]["students"].length-1;j++){
    let record=data[i]["students"][j];
    let marks=0;
    for(let z=0;z<=record["marks"].length-1;z++){
      marks=marks+record["marks"][z];
    }
    if(highest<marks){
      highest=marks;
      studentName=record["name"];
    }
  }
  console.log(data[i]["grade"]+"-"+studentName+"-"+highest);
}
