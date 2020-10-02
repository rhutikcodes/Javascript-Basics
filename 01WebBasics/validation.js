function myValidation () {
  let myValue = document.getElementById('myform').value
  if (isNaN(myValue) || myValue < 1 || myValue > 20) {
    document.querySelector('#idone').innerHTML = 'not a valid input'
    console.log('Not a valid input')
  } else {
    document.querySelector('#idone').innerHTML = 'this is cool'
    console.log('this is cool')
  }
}

//form validation

document.querySelector('.myform').addEventListener('submit', event => {
  event.preventDefault()
  console.log(event.target.username.value)
  console.log(event.target.realname.value)
  event.target.username.value=''
  event.target.realname.value=''
})
