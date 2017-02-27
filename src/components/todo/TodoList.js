import React from 'react'
import {TodoItem} from './TodoItem'

export const TodoList = (props) => {
  return (
    <div className="Todo-List">
      <ul>
        {props.todos.map(todo =>
          <TodoItem id={todo.id} name={todo.name}/>)}
      </ul>
    </div>
  )
}
