const IS_ABSENT = 0;
// Generate a random number 
let empCheck = Math.floor(Math.random() * 10) % 2;

if (empCheck === IS_ABSENT) {
    console.log("Employee is Absent");
} else {
    console.log("Employee is PRESENT");
}