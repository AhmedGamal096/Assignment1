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
// const arr1 = [1 , 2 , 3] ;
// const arr2 = [4 , 5 , 6] ;
//  const newArr = [...arr1 , ...arr2] ;
//  console.log(newArr);

// 6. Use a switch statement to return the day of the week given a number (1 = Sunday …., 7 = Saturday).
// function dayOfWeek(dayNumber){
//     let name ;
//     switch (dayNumber) {
//     case 1 :
//         name = "Sunday";
//         break;
//     case 2 :
//         name = "Monday";
//         break;
//     case 3 :
//         name = "Tuseday";
//         break;
//     case 4 :
//         name = "Wensday";
//         break;
//     case 5 :
//         name = "Thursday";
//         break;
//     case 6 :
//         name = "Friday";
//         break;
//     case 7 :
//         name = "Saterday";
//         break;
//     default:
//         console.log(`The Number out of Week !!`);
//         break;
//  }
// return name;
// }
// console.log(dayOfWeek(7));

// 7. Create an array of strings and return their lengths using map method
// const arr = ["a" , "ab" , "abc"] ;
// let getLength = arr.map((items)=> {
//  return items.length ;
// });
// console.log(getLength);

// 8. Write a function that checks if a number is divisible by 3 and 5.
// function check(num) {
//     if (num % 3 === 0 && num % 5 === 0) {
//         console.log("The number divisible by both ( 5 , 3 )"); 
//         return num ;
//     }else if (num % 3 === 0) {
//         console.log("The number divisible by 3 only");
//         return num ;
//     }else if (num % 5 === 0) {
//         console.log("The number divisible by 5 only");
//         return num ;
//     } else {
//         console.log("The number not divisible by both ( 5 , 3 )");
//         return false ;
//     }   
// };
// console.log(check(15));

// 9. Write a function using arrow syntax to return the square of a number .
// const getSquareOfNum = (number) => {
//     console.log(`The Square of ${number} is :` , number * number);
//     let x = number * number ;
//     return (x) ;
// } ;
// console.log(getSquareOfNum (10)) ;

// 10.Write a function that destructures an object to extract values and returns a formatted string.
// function destPersonInfo(person){
//    const { name , age } = person;
//    return `${name} is ${age} years old` ;
// }
// const person = { name : `john` , age : `25`} ;
// console.log(destPersonInfo(person));

// 11.Write a function that accepts multiple parameters (two or more) and returns their sum.
// function multiple (num1 , num2 , ...numbers){
// const sumNum = [num1 , num2 , ...numbers] ;
// return sumNum.reduce((num1 , num2)=> num1 + num2 , 0) ;
// }
// console.log(multiple(1 , 2 , 3 , 4 , 5 , 6 , 7));

// 13. Write a function to find the largest number in an array.
// function getMaxNum (num1 , num2 , ...numbers){
//     const allNum = [num1 , num2 , ...numbers] ;
//     let x = Math.max(...allNum) ;
//     return x ;
// }
// let result = getMaxNum(1 , 2 , 5 , 7 , 3 , 11 , 15 , 20);
// console.log("The Result Is" , result);

//14. Write a function that takes an object and returns an array containing only its keys.
// function getKeysOfObject(object) {
//     return Object.keys(object) ;
// }
// const output = getKeysOfObject(object = {name : "Ahmed" , age : 25 , gender : "Male"} )
// console.log(output);

// 15. Write a function that splits a string into an array of words based on spaces.\
// function splitOfString (string){
//  return string.split(' ') ;
// }
// let output = splitOfString("Ahmed Is Good BackEnd Developer")
// console.log(output);





