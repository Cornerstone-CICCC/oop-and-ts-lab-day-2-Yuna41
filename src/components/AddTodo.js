import { Component } from "../common/Component.js";

export class AddTodo extends Component {
  constructor(props){
    super(props)
  }

  // handleAddToList(todo){
  //   this.props.todoContext.addTodo(todo)
  // }

  render() {
    const addElement = document.createElement('div')
    addElement.className = "add-todo"
    addElement.innerHTML = `
      <input type="text" id="todo-input" placeholder="Enter task details...">
      <button id="todo-add-btn">Add To Do</button>
    `
    
    const addInput = addElement.querySelector('#todo-input')
    const addBtn = addElement.querySelector('#todo-add-btn')

    addBtn.addEventListener('click', () => {
      const newTask = addInput.value.trim()
      if(newTask !== ""){
        // this.handleAddToList(addInput.value.trim())
        this.props.todoContext.addTodo(newTask)
        addInput.value = ''
      } else {
        alert('Please enter a task detail!')
      }
    })

    return addElement;
  }
}