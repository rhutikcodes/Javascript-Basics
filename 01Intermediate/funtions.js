let greetings =function(name){
    console.log(`hey,${name}`)

}
greetings('Rhutik')


let addition=function(num1 ,num2){

    return num1+num2
}

console.log(addition(5,4));



//default Parameter

let user=function(name='unName',courseCount=0){

    return 'hello ' + name + ' you have ' + courseCount + ' courses'
}

console.log(user('Rhutik',5));

