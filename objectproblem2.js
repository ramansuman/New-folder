const prompt=require("prompt-sync")();
function subjectMarks(user,num){
    let arr=[];
    //[ { Name: 'Raghu Anand', 'Total Marks': 112.5, 'Max marks': 94 },
    // { Name: 'Ram Singh', 'Total Marks': 129.5, 'Max marks': 91 } ]
   
    arr=user.map((val)=>{
        let maxMarks= Math.max.apply(Math, val.subjects.map(function(o) { 
            return o.marks;
        }));      
        return{
            "Name":val.firstName+" "+val.lastName,
            "Total Marks":(val.subjects[0].marks+val.subjects[1].marks+val.subjects[2].marks)/n,
            "Max Marks": maxMarks
        };
    });
    return arr;
}
      let user = [
      {
          "firstName": "Raghu",
          "lastName": "Anand",
          "subjects": [
              { "name":"Maths","marks":94},
              { "name":"Science","marks":67},
              { "name":"Hindi","marks":64}
          ]
      },
      {
          "firstName": "Ram",
          "lastName": "Singh",
          "subjects": [
              { "name":"Maths","marks":84},
              { "name":"Science","marks":84},
              { "name":"Hindi","marks":91}
          ]
      }
  ]
      let n=parseInt(prompt("Enter a number :- "));
      console.log(subjectMarks(user,n));