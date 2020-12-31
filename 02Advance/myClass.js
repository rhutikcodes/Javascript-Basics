class User {
  constructor (firstName, lastName, credit) {
    this.firstName = firstName
    this.lastName = lastName
    this.credit = credit
  }

  getFullName () {
    return `${this.firstName} ${this.lastName} is my full name`
  }
  editName (name) {
    const mName = name.split(' ')
    this.firstName = mName[0]
    this.lastName = mName[1]
  }
}

const john = new User('John', 'Doe', 30)
console.log(john)
console.log(john.getFullName())
john.editName('Johnny Doe')
console.log(john)
