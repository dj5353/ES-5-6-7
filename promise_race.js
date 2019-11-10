let basic = function(){
    return new Promise(function(resolve,reject) { 
       resolve("The javascript module is done") 
    })
};

let advance = function(mes){
    return new Promise(function(resolve,reject){
        resolve("The node.js is done")
    })
}

let expert = function(mes){
    return new Promise(function(resolve,reject){
        resolve("Congratulate you are a backend Developer")
    })
}
Promise.race([basic(),advance(),expert()]).then(function(){
    console.log("One of them finished")
})