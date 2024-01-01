const prompt=require("prompt-sync")();
function subjectMarks(user, subject) {
    //output:-[ { Name: 'Raghu Anand', Marks: 98 }, 
    //{ Name: 'Ram Singh', Marks: 99 }, { Name: 'Shayam Sharma', Marks: 80 } ]
    let arr=[];
    arr=user.map((val)=>{return{
        "Name":val.firstName+" "+val.lastName,
        "Marks": val.marks[subject]
    }
});
return arr;
}
let user = [{
        "firstName": "Raghu",
        "lastName": "Anand",
        "marks": {
            "Maths": 98,
            "Science": 64,
            "Hindi": 90
        }
    },
    {
        "firstName": "Ram",
        "lastName": "Singh",
        "marks": {
            "Maths": 99,
            "Science": 72,
            "Hindi": 94
        }
    },
    {
        "firstName": "Shayam",
        "lastName": "Sharma",
        "marks": {
            "Maths": 80,
            "Science": 80,
            "Hindi": 70
        }
    }
]
let str = prompt("Enter the subject name :- ");
console.log(subjectMarks(user, str));