import { Component } from "../common/Component.js";
import { TodoItem } from "./TodoItem.js";

export class TodoList extends Component {
  constructor(props){
    super(props)
    this.state = {
      todos: []
    }
  }

  render() {
    const todoListElement = document.createElement('div')
    todoListElement.className = "todo-list"

    const ul = document.createElement('ul')
    // this.state.todos.forEach(todo => {
    //   const todoItem = new TodoItem({
    //     todo,
    //     todoContext: this.props.todoContext
    //   }).render()
    //   ul.appendChild(todoItem)
    // })

    this.props.todoContext.subscribe((todos) => {
      ul.innerHTML = ''
      todos.forEach(todo => {
        const item = new TodoItem({
          todo,
          todoContext: this.props.todoContext
        }).render()
        ul.appendChild(item)
      })
    })
    todoListElement.appendChild(ul)
    
    return todoListElement;
  }
}