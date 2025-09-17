export class TodoContext {
  constructor(){
    this.todos = []
    this.listeners = []
  }

  addTodo(task){
    // this.todos.push({
    //   id: this.todos.length + 1,
    //   task: todo,
    //   completed: false
    // })

    const todo = {
      id: this.todos.length + 1,
      task,
      completed: false
    }
    this.todos.push(todo)
    // console.log(this)
    this.notifyListeners()
  }

  deleteTodo(id){
    this.todos = this.todos.filter(todo => todo.id !== id)
    this.notifyListeners()
  }

  toggleTodo(id){
    this.todos = this.todos.map(todo => {
      if(todo.id === id) todo.completed = !todo.completed
      return todo
    })
    this.notifyListeners()
  }

  // updateTodo(id)

  subscribe(listener){
    this.listeners.push(listener)
  }

  notifyListeners(){
    this.listeners.forEach(listener => listener(this.todos))
  }
}