import React from 'react'
import { Alert, Form, Col, Container, Nav, Navbar, Row, Image, Button } from 'react-bootstrap'
import EditorAdd from '../Components/EditorAdd'
import {Trash} from 'react-bootstrap-icons'
import './Editor.css'

const Editor = ({items, handleRemove, handletText, onAdd, handleToggle}) => {
  
  return (
    <div className='container-editor'>
      {items.map((item)=> 
        <Form.Group key={item.id} className='editor-item'>
          <Form.Check
            className='editor-radio'
            type='checkbox'
            checked={item.done}
            onChange={(e)=>handleToggle(item.id, e.target.checked)}
          />
          <Form.Control
            className='editor-input'
            type='text'
            value={item.text}
            onChange={(e)=>handletText(item.id, e.target.value)}
          />
          <Button
            className='editorAdd-byttom'
            type='button'
            variant='dark'
            onClick={()=>handleRemove(item)}
          ><Trash/></Button>
          </Form.Group>
      )}
        <EditorAdd
          onAdd={onAdd}
        />
    </div>
  )
}

export default Editor