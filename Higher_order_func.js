//Higher Order Function are those that recieve function as an argument and returns function as an output
// map
// reduce
// filter


//map 

//takes a callback function as arg 
// var arr = [1,2,3,4]
// var arr1 = arr.map(item => item*2)
// console.log(arr)
// console.log(arr1)

//reduce

//takes a callback function as an arg
//accumulator = intial value if any otherwise  first value
//next val = next value to accumulator

//without intial value declared

// var arr = [1,2,3,4]
// var arr1 = arr.reduce((acc,next_val) => acc + next_val)
// console.log(arr)
// console.log(arr1)

//with intial value declared

// var arr = [1,2,3,4]
// var arr1 = arr.reduce((acc,next_val) => acc + next_val,10)
// console.log(arr)
// console.log(arr1)

//filter
//creates new array with the  all elements passes the test provided by callback function

arr = [1,2,3,4,34,32,4,1,31,2,5]
var num_greater = arr.filter(item => item>18)
console.log(num_greater)

