import React, { useState } from 'react'
import { Alert, Form, Col, Container, Nav, Navbar, Row, Image, Button } from 'react-bootstrap'
import './EditorAdd.css'

const EditorAdd = ({onAdd}) => {

  const [text, setText] = useState('');

  const handleAdd = () => {
    onAdd(text)
    setText('')
  }

  return (
    <div className='container-editorAdd'>
      <Form.Group className='editorAdd-item'>
 
        <Form.Control
          className='editorAdd-input'
          type='text'
          value={text}
          onChange = {e=>setText(e.target.value)}

        />
        <Button
          className='editorAdd-byttom'
          type='button'
          variant='primary'
          onClick={handleAdd}

        >Add</Button>
        </Form.Group>
    </div>
  )
}

export default EditorAdd