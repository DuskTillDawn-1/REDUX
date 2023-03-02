import React from 'react'
import { useSelector } from 'react-redux';

function ListItems() {
  const todos = useSelector((state) => state.todos);

  return (
    <div><ul className='list-group'>
    {todos.map((todo) => (
       <li key={todo.id}>{todo.title} {todo.id}</li>
    ))}
</ul></div>
  )
}

export default ListItems