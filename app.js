///// Q1..Declare and initialize an empty multidimensional array.
// (Array of arrays)


// **********Coding***************///
//  let arrEmpty = [[]];
//  console.log([]);


//// Q2..Declare and initialize a multidimensional array
// representing the following matrix:


// **********Coding***************///
// let arrMatrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];
// for(let i=0; i < arrMatrix.length; i++){
//     let row = "";
//     for(let j=0; j < arrMatrix[i].length; j++){
//         row += arrMatrix[i][j] + " ";
//     }
    
//     console.log(row);


// }


/// Q...Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]


// **********Coding***************///
// let num = [24, 53, 78, 91, 12];
// let smallestnum = num[0];
// for(let i=0; i < num.length; i++){
//     if(num[i] < smallestnum){
//         smallestnum = num[i];
//     }

   
// }
//  console.log(smallestnum);




// // Q..Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].



// **********Coding***************///
// let num = [24, 53, 78, 91, 12];
// let largestnum = num[3];
// for(let i=0; i > num.length; i++){
//     if(num[i] > largestnum){
//         largestnum = num[i];
//     }

   
// }
//  console.log(largestnum);



///Q...Write a program to print numeric counting from 1 to 10.


// **********Coding***************///
// for(let i=1; i<=10; i++){
//     console.log(i);
//     document.write(i + "<br>");

// }


///Q...Write a program to print multiples of 5 ranging 1 to
// 100.


// **********Coding***************///
// for(let i=1; i<=20; i++){
//     console.log(i*5);
//     document.write(i*5 + " ");
// }




///Q..Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.



// **********Coding***************///
// let userNum = +prompt("Enter a number to show its multiplication table");
// let userTableLength = +prompt("enter the length of table");
// document.write("Multiplication table is " + userNum )
// document.write("<br>" + "length is " + userTableLength + "<br>")
// for(let i=1; i<=userTableLength; i++){
//     // console.log(userNum * i);
//     document.write ( "<br>" + userNum + " " + "x " + i + " " + "= " + userNum*i + "<br>")
// }




//Q...Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]


// **********Coding***************///
// let arrfruits = ["apple", "banana", "orange", "mango", "strawberry"];
// for(let i=0; i < arrfruits.length; i++){
//     console.log(arrfruits[i]);
//     document.write( arrfruits[i] + "<br>");
  
// }

// for(let i=0; i < arrfruits.length; i++){
//     console.log(arrfruits[i]);
//     document.write( "<br>" + "Element at index " + i + " is " + arrfruits[i] + "<br>");
  
// }





//Q...Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k



// **********Coding***************///

////a.....
// document.write ("Counting" + "<br>" + "<br>" );
// for(let i=1; i<=15; i++){
//     console.log(i);
//     document.write(i + ",");
// }


////b...
// document.write ( "<br>" +  "<br>" + "Reverse Counting" + "<br>" + "<br>");
// for(let i=10; i>=1; i--){
//     console.log(i);
//     document.write(i + ",");
// }


////c...
// document.write ( "<br>" +  "<br>" + "Even" + "<br>" + "<br>");
// for(let i=0; i<=20; i++){
//     if(i % 2 === 0){
//         console.log(i);
//         document.write(i + ",");
//     }
// }



////d...
// document.write ( "<br>" +  "<br>" + "Odd" + "<br>" + "<br>");
// for(let i=0; i<=20; i++){
//     if(i % 2 !== 0){
//         console.log(i);
//         document.write(i + ",");
//     }
// }


////e...
// document.write ( "<br>" +  "<br>" + "Series" + "<br>" + "<br>");
// for(let i=1; i<=10; i++){
//     console.log(i * 2);
//     document.write(i * 2 + "k" + ",");
// }




//Q...You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:



// **********Coding***************///
// var userInputOfItem = prompt("Welcom to AbC bakery , What do you Want to order sir/medam?") 
//  var arrOfItems = ["cake", "apple pie", "cookie", "chips", "patties"];
// var isFound = false

//  for(let i=0; i < arrOfItems.length; i++){
//     if(arrOfItems[i] === userInputOfItem){
//         isFound = true
//         console.log(userInputOfItem + " is available at index " + i + " in our bakery ");
//         break;
//     }

//     else{
//     isFound = false
//         console.log("We are sorry ," + userInputOfItem + " is not available in our bakery");
//     }
     
     
//  }
































