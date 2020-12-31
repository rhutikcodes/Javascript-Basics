 // && - AND operator 
 // || - OR operator

let isVerified=true
let isGuest=false
let hasPaymentToken=true

 if(isVerified&& hasPaymentToken){
     console.log('Greeting\nAccess to all paid courses')

 }else if(isVerified || isGuest){

    console.log('Access trail Courses')
 } else{
     console.log('MESSAGE: Contact admin')
 }