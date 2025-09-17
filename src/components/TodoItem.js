import { Component } from "../common/Component.js";

export class TodoItem extends Component {
  constructor(props){
    super(props)
  }

  // handleDeleteTodo(){
  //   console.log(this)
  // }

  render() {
    const todoElement = document.createElement('li')
    todoElement.className = "todo-item"
    todoElement.innerHTML = `
      <span>${this.props.todo.task}</span>
      <div>
        <button class="btn-todo-status">${this.props.todo.completed ? 'Mark Incomplete' : 'Mark Complete'}</button>
        <button class="btn-todo-delete">Delete</button>
      </div>
    `

    if(this.props.todo.completed){
      todoElement.classList.add('completed')
    } else {
      todoElement.classList.remove('completed')
    }

    const statusBtn = todoElement.querySelector('.btn-todo-status')
    statusBtn.addEventListener('click', () => {
      this.props.todoContext.toggleTodo(this.props.todo.id)
    })

    const deleteBtn = todoElement.querySelector('.btn-todo-delete')
    deleteBtn.addEventListener('click', () => {
      this.props.todoContext.deleteTodo(this.props.todo.id)
    })
    

    // todoElement.querySelector('.btn-todo-delete').addEventListener('click', () => this.handleDeleteTodo)

    return todoElement;
  }
}