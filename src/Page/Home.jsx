import React from 'react'
import { Card, Col, Container, Nav, Alert, Row } from 'react-bootstrap'
import './Home.css'

const Home = ({doneItems, todoItems}) => {
  console.log(doneItems)
  return (
    <div className='container-home'>
      <div className='todo-home px-2'>
        {doneItems.map((item)=>
        <Alert key={item.id} className='parag-home '>{item.text}</Alert> 
        )}
      </div>
      <div className='done-home px-2'>
      {todoItems.map((item)=>
        <Alert key={item.id} className='parag-home '>{item.text}</Alert> 
        )}
      </div>
    </div>
  )
}

export default Home