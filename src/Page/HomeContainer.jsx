import React from 'react'
import { useSelector } from 'react-redux'
import Home from './Home'

const HomeContainer = () => {

  const doneItems = useSelector((state)=>
    state.todo.items.filter((item)=>item.done)
  )
  const todoItems = useSelector((state)=>
    state.todo.items.filter((item)=>!item.done)
  )
  
  return (
    <Home
    doneItems={doneItems}
    todoItems={todoItems}
    />
  )
}

export default HomeContainer