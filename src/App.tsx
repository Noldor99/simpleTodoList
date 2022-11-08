import React from 'react'
import { Card, Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import {Link} from 'react-router-dom'
import Home from './Page/Home'
import Editor from './Page/Editor'
import { useDispatch } from 'react-redux'
import {INIT_TODO} from './store/consts/consts'
import {todoList} from './mock-items'
import EditorContainer from './Page/EditorContainer'
import HomeContainer from './Page/HomeContainer'

const App = () => {
    const dispatch = useDispatch()
    dispatch({type:INIT_TODO, payload:todoList})

  return (
    <div>
        <Navbar bg='info' variant='dark' className="d-flex justify-content-between" >
          <Container>
            <Navbar.Brand color='#0dcaf0'>Logo</Navbar.Brand>
            <Nav >
              <Link className='text-decoration-none text-light px-4' to='/'>Home</Link>
              <Link className='text-decoration-none text-light' to='/todo'>Editor</Link>
            </Nav>
          </Container>
        </Navbar>
      <Routes>
        <Route  path='/' element = {<HomeContainer/>}/>
        <Route  path='/todo' element = {<EditorContainer/>}/>
      </Routes>
    </div>

  )
}

export default App