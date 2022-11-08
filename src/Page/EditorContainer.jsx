import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Editor from './Editor'
import {INIT_TODO, DELETE_TODO, ADD_TODO, UPDATE_TODO_DONE, UPDATE_TODO_TEXT} from '../store/consts/consts'
import { v4 as uuid } from 'uuid'

const EditorContainer = () => {

  const {items} = useSelector(state=>state.todo)
  const dispatch = useDispatch()
  console.log(items)

  const handleRemove = (item) => {
 
    const clear = dispatch({
      type: DELETE_TODO,
      payload: {
        id: item.id,
      },
      meta: {
        delayMs: 1000,
      },
    })
 
  } 
  const onAdd = (text)=>{
    dispatch({type: ADD_TODO, payload:{
      id: uuid(),
      text,
      done: false
    }})
  }

 
  return (
      <Editor
      items ={items}
      handleRemove={handleRemove}
      handleToggle={(id, done)=>dispatch({type:UPDATE_TODO_DONE, payload: {id, done}})}
      onAdd={onAdd}
      handletText={(id, text)=>dispatch({type:UPDATE_TODO_TEXT, payload: {id, text}})}
      />
  )
}


export default EditorContainer