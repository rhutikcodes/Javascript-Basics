let userName='thisissomething'
let password='123523'

let userCheck=function(user){

    if( (user.includes(123))&& (user.length>6)){
        print()
        return true
    }
}

let passCheck=function(pass){
    if((pass.includes(1234))&& (pass.length>8)){
        return true
    }   
}

console.log(passCheck(password))


