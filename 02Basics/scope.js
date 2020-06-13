// let -  let is block scoped . let can be only available inside the scope it's declared, like in for loop,
// var - var is function scoped , var can be accessed outside the loop for example


let isGlobal='someValue'

if(true){

    let isLocal='someMorevalue'
    console.log(isLocal);
    var aGlobalVariable='ugh!'
}

// console.log(isLocal); ReferenceError: isLocal is not defined

console.log(aGlobalVariable);


