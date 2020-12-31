var john = {
  name: 'I am John',
  age: 25,
  isActive: false
}
var jane = {
  name: 'I am Jane',
  age: 28,
  isActive: false
}

var sam = {
  name: 'I am Sam',
  age: 23,
  isActive: false
}

let users = new Map()
users.set('john',john)
users.set('jane',jane)
users.set('sam',sam)

// console.log(users)

// console.log(users.get('sam'));
// console.log(users.keys());
// console.log(users.values());


//For Of loop

// for (const key of users.keys()) {
//     console.log(key);
// }

// for (const value of users.values()) {
//     console.log(value.name);
// }

// for (const [key,value] of users.entries()) {
//     console.log(key+' = '+ value.age);
// }

// users.forEach((value,key)=> console.log(key+' = '+ value.age))  


var arrayOfArray=[['one','1'],['two','2'],['three','3']]

var mappp=new Map(arrayOfArray)
console.log(mappp);