// 1. Convert the string "123" to a number and add 7
// let x = Number(`123`);
// console.log( x + 7 );

// 2. Check if the given variable is falsy and return "Invalid" if it is.
// if (0) {
//     console.log("True");
// }else{
//     console.log("Given Value is False ");
// }

// 3. Use for loop to print all numbers between 1 and 10, skipping even numbers using continue .
// for(let i = 1 ; i <= 10 ; i++) {
//     if ( i % 2 === 0 ) {
//         continue ;
//     }
//     console.log(i);
// }

// 4. Create an array of numbers and return only the even numbers using filter method.
// let arr = [1 , 2 , 3 , 4 , 5] ;
// let evenArr = arr.filter((num)=>{
//    return num % 2 === 0 ;
// }) ;
// console.log(evenArr);

// 5. Use the spread operator to merge two arrays, then return the merged array.
// let arr1 = [1 , 2 , 3] ;
// let arr2 = [4 , 5 , 6] ;
//  let newArr = [...arr1 , ...arr2] ;
//  console.log(newArr);

// 6. Use a switch statement to return the day of the week given a number (1 = Sunday …., 7 = Saturday).
function dayOfWeek(dayNumber){
    let name ;
    switch (dayNumber) {
    case 1 :
        name = "Sunday";
        break;
    case 2 :
        name = "Monday";
        break;
    case 3 :
        name = "Tuseday";
        break;
    case 4 :
        name = "Wensday";
        break;
    case 5 :
        name = "Thursday";
        break;
    case 6 :
        name = "Friday";
        break;
    case 7 :
        name = "Saterday";
        break;
    default:
        console.log(`The Number out of Week !!`);
        break;
 }
return name;
}
console.log(dayOfWeek(7));

