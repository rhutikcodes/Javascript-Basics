let getMyGrade=function (currentMarks,totalMarks){
let percentage=(currentMarks/totalMarks)*100
let grade=''
if(percentage>=90){
    grade='A'
}else if(percentage>=80){
    grade='B'
}else if(percentage>=70){
    grade='C'
}else if(percentage>=60){
    grade='D'
}else {
    grade='F'
}

return `your grade is ${grade} and percentage is ${percentage}`
}

let result=getMyGrade(441,500)
console.log(result);