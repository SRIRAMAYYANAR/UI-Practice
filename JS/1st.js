// You are given a variable marks. Your task is to print:

// -  if marks is greater than 90.
// -  if marks is greater than 80  and less than or equal to 90 .
// -  if marks is greater than 70 and less than or equal to 80.
// -  if marks is greater than 60 and less than or equal to 70.
// -  if marks is greater than 50  and less than or equal to60 .
// -  if marks is greater than  40and less than or equal to 50.
// -  if marks is greater than 30 and less than or equal to 40.
// -  if marks is less than or equal to 30.


function task(marks){
    if(marks > 90){
        console.log("the marks is greater then 90");
    }
    else if(marks > 80 && marks < 90){
        console.log("the marks is lessthen then 90");
    }
    else{
        console.log("error");
    }
}
task (81);  