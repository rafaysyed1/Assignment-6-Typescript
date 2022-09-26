// alert("Welcome to the Assignment # 6 of Typescript");
// alert("Programs are developed by Pure-grammer Rafay");
//Program # 1
// alert(" 1.Write a ts program to print all natural numbers from 1 to n. - using while loop");
// var numberdayoye:string | null =prompt("Write any number of your own choice");
// var numbercovertion:number= Number(numberdayoye);
// var n:number = 0;
// while(n<numbercovertion){
//     console.log("Apkay matlooba numbers",n);
//     n++;
// }
// alert("2. Write a ts program to print all natural numbers in reverse (from n to 1). - using while loop");
// var numberdayoye:string | null =prompt("Write any number of your own choice");
// var numbercovertion:number= Number(numberdayoye);
// var n:number = numbercovertion;
// while(n>=0){
//     console.log("Apkay matlooba numbers",n);
//     n--;
// }
// alert("3. Write a ts program to print all the alphabets from a to z using wile loop");
// var alpha:number=97;
// while(alpha<=122){
//     console.log(String.fromCharCode(alpha));
//     alpha++;
// }
// var evenNumber:number = 1;
//  alert("4. Write a ts program to print all even numbers between 1 to 100. - using while loop")
// while(evenNumber<=100){
//     if(evenNumber%2==0){
//       console.log("The even numbers are",evenNumber);
//     }
//     evenNumber++;
// }
//alert("5.Write a ts program to find out all odd numbers between 1-100");
// var oddNumber:number=1;
// while(oddNumber<=100){
//   if (oddNumber%2!=0){
//     console.log("These are odd numbers",oddNumber);
//   } {
//   }
//   oddNumber++
// }
// alert("6,Write a ts program to write the sum of the sum of all number between 1 to n");
// var Lumber:number=0;
// var nUpdated:string | null = prompt("Write a number of your own choice");
// var nUpdated2:number = Number(nUpdated);
// var nertural:number = 1;
// var final;
// while(nertural<=nUpdated2){
//   var sum:number = Lumber+nertural; 
//   final =+ sum+nertural;
//   nertural++;
// }
// console.log("The sum of all numbers between 1-n is",final);
// alert("9. Write a ts program to print multiplication table of any number.");
// var tablechahye:string | null = prompt("Write the number which you want to display the table");
// var tableupdate:number = Number(tablechahye);
// var lumber1:number = 1;
// console.log("Your inputed number",tableupdate ,"table is");
// while(lumber1<=10){
//   console.log(tableupdate,'X',lumber1,'=',tableupdate*lumber1);
//   lumber1++;
// }
// //alert("10. Write a ts program to count number of digits in a number.");
// var number1:number = 56789123;
// var numb2:string = String(number1);
// console.log("The number of digits in the number",number1,"is",numb2.length);
// alert("11. Write a ts program to find first and last digit of a number."); 
// function firstdigit(digitupdate:number){
//   while(digitupdate>=10){
//      digitupdate/=10;
//   }
//   return Math.floor(digitupdate);
// }
// function lastDigit(digitupdate:number){
//   while(digitupdate>=10){
//     return Math.floor(digitupdate%10);
//   }
// }
// var digitlikh:string | null = prompt("Enter the number of your own choice");
// var digitupdate : number = Number(digitlikh);
// console.log("The first digit is",firstdigit(digitupdate));
// // console.log("The last  digit is",lastDigit(digitupdate));
// alert("12. Write a ts program to find sum of first and last digit of a number.");
// var numberlikhoye:string | null = prompt("Write a number of your own choice");
// var numberupdate:number = Number (numberlikhoye);
// function Firstdigit(numberupdate:number){
//   // loop will keep doing work untill first digit came
//   while(numberupdate>=10){
//     numberupdate/=10;
//   }
//  // We will return the first digit value and use math floor function to not our digit in decimal
//  return Math.floor(numberupdate);
// }
// function Lastdigit(numberupdate:number){
//   //loop will keep doing work untill first digit came
//   while(numberupdate>=0){
//     return Math.floor(numberupdate%10);   //(numb%10)it means exact the last digit of the number
//   }
// }
// var numberlikhoye:string | null = prompt("Write a number of your own choice");
// var numberupdate:number = Number (numberlikhoye);
// console.log("The sum of the first digit",Firstdigit(numberupdate),"and Last digit",Lastdigit(numberupdate),"is",(Firstdigit(numberupdate)+ Lastdigit(numberupdate)));
// alert("13. Write a ts program to swap first and last digits of a number.");
// function Firstdigit(numberupdate:number){
//   // loop will keep doing work untill first digit came
//   while(numberupdate>=10){
//     numberupdate/=10;
//   }
//  // We will return the first digit value and use math floor function to not our digit in decimal
//  return Math.floor(numberupdate);
// }
// function Lastdigit(numberupdate:number){
//   //loop will keep doing work untill first digit came
//   while(numberupdate>=0){
//     return Math.floor(numberupdate%10);   //(numb%10)it means exact the last digit of the number
//   }
// }
// function swapkarein(firstdigit:number,lastDigit:number){
//   var swapping:number;
//   swapping = firstdigit;
//   firstdigit=lastDigit;
//   lastDigit = swapping;
//   console.log("digits before swapping","First digit is =",firstdigit,"Last digit is",lastDigit);
// }
// var numberlikhoye:string | null = prompt("Write a number of your own choice");
// var numberupdate:number = Number (numberlikhoye);
// var firstdigit:any = Firstdigit(numberupdate);
// var lastDigit:any = Lastdigit(numberupdate);
// console.log("Let's swap these variables");
// console.log("digits before swapping","First digit is =",firstdigit,"Last digit is",lastDigit);
// swapkarein(firstdigit,lastDigit);
// alert("14. Write a ts program to calculate sum of digits of a number.");
// function findsum(updatekariye){
//   var sum:number = 0;
//   while(updatekariye!=0){
//     sum = sum + updatekariye%10;    //n%10(get rightmost digit)
//     updatekariye /=10;             // /10 means getting next digit untill it becomes zero
//   }
//   return Math.floor(sum);
// }
// var numberdo:string | null = prompt("Write the number of your own personal choice");
// var updatekariye:number = Number(numberdo);
// console.log("The sum of digits of number is",findsum(updatekariye));
//alert("14. Write a ts program to calculate product of digits of a number.");
// function findproduct(updatekariye){
//   var product:number = 1;
//   while(updatekariye>=0){
//     product = product * updatekariye%10;    //n%10(get rightmost digit)
//     updatekariye /=10;             // /10 means getting next digit untill it becomes zero
//   }
//   return Math.floor(product);
// }
// var updatekariye:number = 20;
// console.log("The product of digits of number is",findproduct(updatekariye));
//alert("16. Write a ts program to enter a number and print its reverse.");
//The inputed number is
//alert("16. Write a ts program to enter a number and print its reverse.");
// var numberdo:number = 29845;
// var reverse:number = 0;
// console.log("The reverse of our number",numberdo,"is",reversekarun(numberdo));
// function reversekarun(numberdo:number) {
//     while(numberdo != 0){
//         reverse = reverse*10;            
//         reverse = reverse+(numberdo%10);
//         numberdo = Math.trunc(numberdo/10);
//       }
//       return reverse;    
// }
// //alert("17. Write a ts program to check whether a number is palindrome or not.");
// function reversekarun(numberlo:number) {
//     while(numberlo != 0){
//         reverse = reverse*10;            
//         reverse = reverse+(numberlo%10);
//         numberlo = Math.trunc(numberlo/10);
//       }
//       return reverse;    
// }
// function palindrome(numberlo:number,reversed:number) {
//     if(numberlo==reversed){
//          console.log("Your inputed number is palindrome");
//     }else{
//         console.log("Your inputed number is not palindrome");
//     }
// }
// var numberlo:number = 121;
//  var reverse:number = 0;
//  var reversed:number = reversekarun(numberlo);
//  palindrome(numberlo,reversed);
//alert("18. Write a ts program to find frequency of each digit in a given integer.");
// var numberdetahun:number = 454667222;
// var stringmeaja:string = String(numberdetahun);
// var dhondlay:number = 4;
// var ajachanddikhaon:string = String(dhondlay);
// var count:number=0;
// for (let index = 0; index < stringmeaja.length; index++) {
//     if (ajachanddikhaon==stringmeaja[index]) {
//         count++;
//     }
// }
// console.log("The frequency of your inputed number",dhondlay ,"is",count);
