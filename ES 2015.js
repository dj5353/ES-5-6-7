// const
// const a = 12;
// a = 13;through an assignment to constant variable error not allowed
// console.log(a);



//let
// var a = 5
// if (a){
//     let b = 10;
//     console.log(a);
//     console.log(b);
// }
// console.log(a);
// console.log(b); through an error as b is not defined as let variable have scope within the block only




//Arrow function  
// var show  = a => a ; dont need to use parrenthesis,curly braces and return statement 

// var sum = (a,b) => a + b one line arrow function  have to use parrenthesis if using more than one argument

// var mul = (a,b) => {
//     return a*b; 
// }
// console.log(show(1));
// console.log(sum(1,2));
// console.log(mul(2,4));




//Template String
// var name = 'divit';
// var insta_id = 'divit_5353'; 
// console.log(`your name is ${ name } and instagram id is ${ insta_id }`);




//default parameters
// function add(a = 1,b = 2){ parameters
//     return a+b;
// }
// console.log(add(a = 4,b = 5)); arguments have precedence over parameters




//for...of  is used to iterate over array nut not over object because array is iterable and object is not iterable.
// arr = [1,2,3,4]
// for(let i of arr){
//     console.log(i);
// } 
// obj = {
//     name : "divit",
//     id : 1810992531,
//     age : 20
// }
// for(let i of obj){ 
//     console.log(i); throws an error obj is not iterable
// }





//REST operator 
//It is used to collect array in a function
// function sum(a,b,...c){
//     console.log(a); 1
//     console.log(b); 2
//     console.log(c); [3,4,5,6]
// }
// sum(1,2,3,4,5,6)





//SPREAD operator
//used on array to spread each value out as a comma seprated value
//when the dots are used outside the parameter that 3 dots(.) are known as spread operator
// let arr1 = [1,2,3,4]
// let arr2 = [5,6,7,8]
// let arr3 = [9,10,11,12]
// var joined_arr = arr1.concat(arr2).concat(arr3)//tedious way of doing
// var combined_arr =[...arr1,...arr2,...arr3]
// console.log(joined_arr);
// console.log(combined_arr);





//more example
// arr = [1,2,3,4]
// console.log(Math.max(arr));Nan (Not a Number error)

//you can do this way but this way is little bit tricky
// arr = [1,2,3,4]
// console.log(Math.max.apply(this,arr))

//Best way to do using spread 

// arr = [5,3,1,2]
// console.log(Math.max(...arr))





//DESTRUCTING
// extracting values form data stored in objects and arrays



//objects Destructing 
//Tradition way of doing things
// 
// var instructor = {
//     firstname : "divit",
//     lastname : "joshi",
// }
// console.log(instructor.firstname)
// console.log(instructor.lastname)

// 
// var instructor = {
//     firstname : "divit",
//     lastname : "joshi",
// }
// var{firstname,lastname} = instructor;
// console.log(firstname);
// console.log(lastname);


//OR
//Changing the name of the variables
// var instructor = {
//          firstname : "divit",
//          lastname : "joshi",
//     }
// var{firstname : first, lastname : last} = instructor;
// console.log(first);
// console.log(last);





//Array destructing
//allow you to extract values from arrays

//Old way
// var arr = [1,2,5,3,4]
// var a = arr[0];
// var b = arr[1];
// var c = arr[2];

// console.log(a);
// console.log(b);
// console.log(c);

//NEW way 

// var arr = [1,2,3,4];
// [a,b,c] = arr;
// console.log(a);
// console.log(b);
// console.log(c);


//Swaping values

// function swap(a,b){
//     return [a,b] = [b,a];
// }
// console.log(swap(1,2));//[2,1]
