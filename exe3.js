const input = {
    branchStudent: [
        { id: 1, branchId: 1, studentId: 1 },
        { id: 2, branchId: 2, studentId: 2 },
        { id: 3, branchId: 2, studentId: 1 },
        { id: 4, branchId: 1, studentId: 3 }
    ],
    branch: [
        { id: 1, name: "CSE" },
        { id: 2, name: "IT" }
    ],
    student: [
        { id: 1, name: "Jay" },
        { id: 2, name: "Sanjay" },
        { id: 3, name:"Rajesh"}
    ]
}

function studenName(index){
    return input.student.find(student => student.id === index)?.name
     }

function brancName(index){
    return input.branch.find(branch => branch.id === index)?.name
     }

const mapping=input.branchStudent.map(function(brandStudent){ 
    let final=Object.assign(brandStudent,{studentName:studenName(brandStudent.studentId)},{branchName:brancName(brandStudent.branchId)}); 
return final; 
} 
) 
console.log(mapping);
