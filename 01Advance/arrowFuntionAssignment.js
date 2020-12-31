const myTodos = [
  {
    title: 'Buy Bread',
    isDone: false
  },
  {
    title: 'Do Yoga',
    isDone: true
  },
  {
    title: 'Meditate',
    isDone: true
  },
  {
    title: 'Code',
    isDone: false
  },
  {
    title: "Wish Everyone Teacher's Day",
    isDone: true
  },
  {
    title: 'Read',
    isDone: false
  }
]


const thingsNotDone=myTodos.filter((todo)=>todo.isDone===false)
thingsNotDone.forEach((todo)=>console.log(todo.title))